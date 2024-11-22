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

export const ABOUT_COMPANY = [
  {
    icon: <HiOutlineBuildingOffice />,
    title: "Engineering Excellence",
    subtitle:
      "Structural and Civil Engineering services for private clients and public agencies.",
  },
  {
    icon: <GrUserWorker />,
    title: "Calculated Inspections",
    subtitle:
      "We are as comfortable running job-site inspections, as punching out stress calculations.",
  },
  {
    icon: <HiOutlineWrenchScrewdriver />,
    title: "Design Expertise",
    subtitle:
      "The local landscape bears all our design expertise: residential, commercial, institutional, and medical structures, including mid and high-rise structures.",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Trusted Quality",
    subtitle:
      "ASM thrives on our commitment to quality, and reliable proposals to submit to owners, architects, construction companies, etc.",
  },
  {
    icon: <GrMoney />,
    title: "Value Engineering",
    subtitle:
      "Understanding that our client's goal may be to minimize costs, ASM delivers quality projects to our clientele to best meet their cost objectives.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Detailed Precision",
    subtitle:
      "We never sacrifice careful attention to detail in our plans and specifications.",
  },
];
