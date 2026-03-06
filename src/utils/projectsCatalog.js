import rawProjects from "../data/projects.generated.json";

const imageModules = import.meta.glob(
  "../assets/files/08-Pictures/**/*.{jpg,jpeg,png,webp,avif,gif,bmp,tif,tiff,JPG,JPEG,PNG,WEBP,AVIF,GIF,BMP,TIF,TIFF}",
  { eager: true, import: "default" }
);

export const ALL_PROJECTS_CATEGORY = {
  slug: "all",
  value: "ALL",
  label: "All Projects",
  heroLabel: "All Projects",
};

export const PROJECT_CATEGORIES = [
  {
    slug: "multi-family",
    value: "MULTI-FAMILY",
    label: "Multi-Family",
    heroLabel: "Multi-Family / Mixed Use",
  },
  {
    slug: "single-family",
    value: "SINGLE FAMILY",
    label: "Single Family",
    heroLabel: "Single Family",
  },
  {
    slug: "commercial",
    value: "COMMERCIAL",
    label: "Commercial",
    heroLabel: "Commercial",
  },
  {
    slug: "park-amusement",
    value: "PARK & AMUSEMENT",
    label: "Park & Amusement",
    heroLabel: "Park & Amusement",
  },
  {
    slug: "educational",
    value: "EDUCATIONAL",
    label: "Educational",
    heroLabel: "Educational",
  },
];

const categoryByValue = new Map(
  PROJECT_CATEGORIES.map((category) => [category.value, category])
);
const categoryBySlug = new Map(
  [ALL_PROJECTS_CATEGORY, ...PROJECT_CATEGORIES].map((category) => [
    category.slug,
    category,
  ])
);

const normalizePath = (value) =>
  String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replaceAll("\\", "/")
    .replace(/\/+/g, "/")
    .trim()
    .toLowerCase();

const imageEntries = Object.entries(imageModules).map(([filePath, src]) => {
  const relativePath = filePath.replace("../assets/files/", "").replaceAll("\\", "/");
  const folderPath = relativePath.split("/").slice(0, -1).join("/");
  const fileName = relativePath.split("/").at(-1);

  return {
    src,
    fileName,
    relativePath,
    folderKey: normalizePath(folderPath),
    fileKey: normalizePath(fileName),
    pathKey: normalizePath(relativePath),
  };
});

const imagesByFolder = imageEntries.reduce((groups, image) => {
  const folderImages = groups.get(image.folderKey) ?? [];
  folderImages.push(image);
  groups.set(image.folderKey, folderImages);
  return groups;
}, new Map());

const resolveCategory = (value) =>
  categoryByValue.get(value) ?? {
    slug: "uncategorized",
    value: value || "UNCATEGORIZED",
    label: value || "Uncategorized",
    heroLabel: value || "Uncategorized",
  };

export const getCategoryBySlug = (slug) =>
  categoryBySlug.get(slug) ?? ALL_PROJECTS_CATEGORY;

export const getCategorySlugFromParam = (slug) =>
  categoryBySlug.has(slug) ? slug : ALL_PROJECTS_CATEGORY.slug;

export const projectsCatalog = rawProjects
  .filter(
    (project) =>
      project.name &&
      project.coverImage &&
      (project.link ||
        project.architect ||
        project.servicePerformed ||
        project.location ||
        project.category)
  )
  .map((project) => {
    const folderKey = normalizePath(project.link);
    const folderImages = imagesByFolder.get(folderKey) ?? [];
    const images = folderImages.map((image, index) => ({
      id: `${project.id}-${index + 1}`,
      src: image.src,
      name: image.fileName,
      alt: `${project.name} image ${index + 1}`,
      relativePath: image.relativePath,
    }));
    const coverPath = normalizePath(
      project.coverImage ? `${project.link}/${project.coverImage}` : ""
    );
    const coverImage =
      images.find((image) => normalizePath(image.relativePath) === coverPath) ??
      images[0] ??
      null;
    const category = resolveCategory(project.category);

    return {
      ...project,
      category,
      images,
      coverImage,
      coverImageUrl: coverImage?.src ?? null,
      hasImages: images.length > 0,
    };
  })
  .sort((left, right) => left.index - right.index);

export const getProjectsForCategory = (categorySlug) => {
  const activeCategory = getCategoryBySlug(categorySlug);

  if (activeCategory.slug === ALL_PROJECTS_CATEGORY.slug) {
    return projectsCatalog;
  }

  return projectsCatalog.filter(
    (project) => project.category.slug === activeCategory.slug
  );
};

export const getProjectById = (projectId) =>
  projectsCatalog.find((project) => project.id === projectId);
