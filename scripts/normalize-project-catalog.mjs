import fs from "fs";
import path from "path";
import xlsx from "xlsx";

const workbookPath = path.resolve("src/assets/files/catalog.xlsx");
const backupPath = path.resolve("src/assets/files/catalog.backup.xlsx");
const picturesRoot = path.resolve("src/assets/files/08-Pictures");

const imageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".bmp",
  ".tif",
  ".tiff",
  ".avif",
]);

const categoryMap = new Map([
  ["MULTI-FAMILY", "MULTI-FAMILY"],
  ["SINGLE FAMILY", "SINGLE FAMILY"],
  ["COMMERCIAL", "COMMERCIAL"],
  ["COMMERCIAL-OFFICE BUILDING", "COMMERCIAL"],
  ["HOSPITALITY", "COMMERCIAL"],
  ["HISTORICAL BUILDING REHABILATION", "COMMERCIAL"],
  ["PARK & AMUSEMENT", "PARK & AMUSEMENT"],
  ["EDUCATIONAL", "EDUCATIONAL"],
]);

const normalizeWhitespace = (value) =>
  String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const slugify = (value) =>
  normalizeWhitespace(value)
    .normalize("NFKD")
    .replace(/[\u2018\u2019\u201c\u201d]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const pathKey = (value) =>
  normalizeWhitespace(value).replaceAll("\\", "/").toLowerCase();

const buildFolderIndex = () => {
  const folders = fs
    .readdirSync(picturesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const relativePath = `08-Pictures/${entry.name}`.replaceAll("\\", "/");
      return {
        name: entry.name,
        relativePath,
        key: pathKey(relativePath),
      };
    });

  return {
    folders,
    byPath: new Map(folders.map((folder) => [folder.key, folder])),
    byName: new Map(folders.map((folder) => [pathKey(folder.name), folder])),
  };
};

const walkFiles = (dirPath) =>
  fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    return entry.isDirectory() ? walkFiles(fullPath) : [fullPath];
  });

const coverRank = (fileName) => {
  const lower = fileName.toLowerCase();
  if (/cover|hero|front|main|primary/.test(lower)) return 0;
  if (/render|perspective|exterior/.test(lower)) return 1;
  if (/picture|img|photo/.test(lower)) return 2;
  return 3;
};

const getImagePaths = (relativeFolder) => {
  const absoluteFolder = path.resolve("src/assets/files", relativeFolder);

  if (!fs.existsSync(absoluteFolder)) {
    return [];
  }

  return walkFiles(absoluteFolder)
    .filter((filePath) => imageExtensions.has(path.extname(filePath).toLowerCase()))
    .map((filePath) => path.relative(absoluteFolder, filePath).replaceAll("\\", "/"))
    .sort((a, b) => coverRank(a) - coverRank(b) || a.localeCompare(b));
};

const resolveFolder = (row, folderIndex) => {
  const rawLink = normalizeWhitespace(row.LINK);

  if (rawLink) {
    const directMatch = folderIndex.byPath.get(pathKey(rawLink));
    if (directMatch) {
      return directMatch.relativePath;
    }

    const basename = rawLink.split(/[/\\]/).filter(Boolean).at(-1);
    const byName = folderIndex.byName.get(pathKey(basename));
    if (byName) {
      return byName.relativePath;
    }
  }

  const projectName = normalizeWhitespace(row.__EMPTY || row["PROJECT NAME"]);
  if (!projectName) {
    return "";
  }

  const normalizedProjectName = pathKey(projectName);
  const exactByName = folderIndex.byName.get(normalizedProjectName);
  if (exactByName) {
    return exactByName.relativePath;
  }

  const fuzzyByName = folderIndex.folders.find((folder) => {
    const folderName = pathKey(folder.name);
    return (
      folderName.includes(normalizedProjectName) ||
      normalizedProjectName.includes(folderName)
    );
  });

  return fuzzyByName ? fuzzyByName.relativePath : "";
};

const workbook = xlsx.readFile(workbookPath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const rawRows = xlsx.utils.sheet_to_json(worksheet, { defval: "" });
const folderIndex = buildFolderIndex();

const normalizedRows = rawRows
  .map((row) => {
    const indexValue = normalizeWhitespace(row["PROJECT NAME"]);
    const projectName = normalizeWhitespace(row.__EMPTY);

    if (!projectName) {
      return null;
    }

    const normalizedCategory = categoryMap.get(
      normalizeWhitespace(row["CATEGORY "])
    ) || normalizeWhitespace(row["CATEGORY "]);
    const folder = resolveFolder(row, folderIndex);
    const images = folder ? getImagePaths(folder) : [];

    return {
      INDEX: /^\d+$/.test(indexValue) ? Number(indexValue) : "",
      "PROJECT NAME": projectName,
      "PROJECT ID": slugify(projectName),
      ARCHITECT: normalizeWhitespace(row.ARCHITECT),
      "SERVICE PERFORMED": normalizeWhitespace(row["SERVICE PERFORMED"]),
      LOCATION: normalizeWhitespace(row.LOCATION),
      CATEGORY: normalizedCategory,
      LINK: folder,
      "COVER IMAGE": images[0] || "",
    };
  })
  .filter(Boolean);

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(workbookPath, backupPath);
}

const nextWorksheet = xlsx.utils.json_to_sheet(normalizedRows, {
  header: [
    "INDEX",
    "PROJECT NAME",
    "PROJECT ID",
    "ARCHITECT",
    "SERVICE PERFORMED",
    "LOCATION",
    "CATEGORY",
    "LINK",
    "COVER IMAGE",
  ],
});

const nextWorkbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(nextWorkbook, nextWorksheet, workbook.SheetNames[0]);
xlsx.writeFile(nextWorkbook, workbookPath);

console.log(`Normalized ${normalizedRows.length} rows.`);
console.log(`Workbook updated: ${workbookPath}`);
console.log(`Backup saved: ${backupPath}`);
