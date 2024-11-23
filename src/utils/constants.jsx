import { GrMoney, GrUserWorker } from "react-icons/gr";
import {
  HiOutlineBuildingOffice,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contactus",
};

export const COMPANY_INFO = {
  NAME: "Civil Group",
  PHONE: "+1 718-999-3939",
  EMAIL: "info@civilgroup.com",
};

const iconStyle = { strokeWidth: 2, width: "45px" };

export const ABOUT_COMPANY = [
  {
    icon: <HiOutlineBuildingOffice style={iconStyle} />,
    title: "Engineering Excellence",
    subtitle:
      "Structural and Civil Engineering services for private clients and public agencies.",
  },
  {
    icon: <GrUserWorker style={iconStyle} />,
    title: "Calculated Inspections",
    subtitle: "We excel at both job-site inspections and stress calculations.",
  },
  {
    icon: <HiOutlineWrenchScrewdriver style={iconStyle} />,
    title: "Design Expertise",
    subtitle:
      "Residential, commercial, institutional, including mid and high-rises.",
  },
  {
    icon: <HiOutlineUserGroup style={iconStyle} />,
    title: "Trusted Quality",
    subtitle:
      "Quality and reliable proposals for owners, architects, and builders.",
  },
  {
    icon: <GrMoney style={iconStyle} />,
    title: "Value Engineering",
    subtitle:
      "ASM delivers quality projects that align with our clients' cost goals.",
  },
  {
    icon: <HiOutlineShieldCheck style={iconStyle} />,
    title: "Detailed Precision",
    subtitle:
      "We never sacrifice careful attention to detail in our plans and specifications.",
  },
];
