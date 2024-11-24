import { GrMoney, GrUserWorker } from "react-icons/gr";
import {
  HiOutlineBuildingOffice,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import engdes from "../assets/images/Engineering Design.jpg";
import planpre from "../assets/images/Preparation of Plans.jpg";
import obsadm from "../assets/images/Construction Observation & Administration.jpg";
import valueEng from "../assets/images/Value Engineering.jpg";
import feasibility from "../assets/images/Feasibility Study & Reports.jpg";
import consDocs from "../assets/images/Construction Documents.jpg";
import cost from "../assets/images/Planning & Cost Estimations.webp";
import BuildingInv from "../assets/images/Building Investigations.jpg";
import structural from "../assets/images/Structural Design.jpg";

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
    id: "engineering-excellence",
    icon: <HiOutlineBuildingOffice style={iconStyle} />,
    title: "Engineering Excellence",
    subtitle:
      "Structural and Civil Engineering services for private clients and public agencies.",
  },
  {
    id: "calculated-inspections",
    icon: <GrUserWorker style={iconStyle} />,
    title: "Calculated Inspections",
    subtitle: "We excel at both job-site inspections and stress calculations.",
  },
  {
    id: "design-expertise",
    icon: <HiOutlineWrenchScrewdriver style={iconStyle} />,
    title: "Design Expertise",
    subtitle:
      "Residential, commercial, institutional, including mid and high-rises.",
  },
  {
    id: "trusted-quality",
    icon: <HiOutlineUserGroup style={iconStyle} />,
    title: "Trusted Quality",
    subtitle:
      "Quality and reliable proposals for owners, architects, and builders.",
  },
  {
    id: "value-engineering",
    icon: <GrMoney style={iconStyle} />,
    title: "Value Engineering",
    subtitle:
      "ASM delivers quality projects that align with our clients' cost goals.",
  },
  {
    id: "detailed-precision",
    icon: <HiOutlineShieldCheck style={iconStyle} />,
    title: "Detailed Precision",
    subtitle:
      "We never sacrifice careful attention to detail in our plans and specifications.",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Civil Engineering Design",
    description:
      "Creating innovative and practical solutions for engineering challenges.",
    image: engdes,
  },
  {
    id: 2,
    title: "Structural Design",
    description:
      "Crafting safe and efficient frameworks for buildings and infrastructure.",
    image: structural,
  },
  {
    id: 3,
    title: "Construction Observation & Administration",
    description: "Ensuring quality and compliance during construction phases.",
    image: obsadm,
  },
  {
    id: 4,
    title: "Value Engineering",
    description:
      "Optimizing designs to maximize functionality and minimize costs.",
    image: valueEng,
  },
  {
    id: 5,
    title: "Preparation of Plans",
    description: "Developing precise and detailed plans for project execution.",
    image: planpre,
  },
  {
    id: 6,
    title: "Feasibility Study & Reports",
    description: "Evaluating project viability through comprehensive analysis.",
    image: feasibility,
  },
  {
    id: 7,
    title: "Construction Documents",
    description:
      "Creating detailed construction documents for project execution.",
    image: consDocs,
  },
  {
    id: 8,
    title: "Planning & Cost Estimations",
    description:
      "Providing accurate and up-to-date cost estimates for project execution.",
    image: cost,
  },
  {
    id: 9,
    title: "Building Investigations",
    description:
      "Analyzing structures for safety, compliance, and performance improvements.",
    image: BuildingInv,
  },
];
