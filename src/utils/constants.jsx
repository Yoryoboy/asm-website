import { GrMoney, GrUserWorker } from "react-icons/gr";
import {
  HiOutlineBuildingOffice,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import engdes from "../assets/images/Engineering Design.jpg";
// Reserved for the commented Construction Observation & Administration service.
// import obsadm from "../assets/images/Construction Observation & Administration.jpg";
import valueEng from "../assets/images/Value Engineering.jpg";
import feasibility from "../assets/images/Feasibility Study & Reports.jpg";
import BuildingInv from "../assets/images/Building Investigations.jpg";
import structural from "../assets/images/Structural Design.jpg";
import thresholdInspections from "../assets/images/Threshold Inspections.webp";
import milestoneInspections from "../assets/images/Milestone Inspections.webp";

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contactus",
};

export const COMPANY_INFO = {
  name: "ASM Consulting Engineers",
  phone: "+1 (786) 324-0938",
  email: "SINA@ASMENG1.COM",
  address: "4836 SW 74th Court, Miami, FL 33155",
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
    id: "special-inspections",
    icon: <GrUserWorker style={iconStyle} />,
    title: "Special Inspections",
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
    id: "structural-design",
    title: "Structural Design",
    description:
      "Crafting safe and efficient frameworks for buildings and infrastructure.",
    image: structural,
    longText:
      "Structural Design is at the core of what we do, focusing on creating reliable frameworks that ensure safety and performance. From high-rise buildings to industrial structures, our team employs cutting-edge techniques to optimize designs. Whether managing complex loads or addressing environmental factors, our designs aim for durability, cost-efficiency, and architectural harmony.",
  },
  {
    id: "civil-engineering-design",
    title: "Civil Engineering Design",
    description:
      "Creating innovative and practical solutions for engineering challenges.",
    image: engdes,
    longText:
      "Our Civil Engineering Design services prioritize delivering innovative solutions tailored to meet project requirements. From roadways to water systems, we handle a wide array of engineering challenges with precision. By integrating advanced modeling tools, we ensure compliance with regulations and maximize efficiency in design execution. We aim to enhance functionality while supporting sustainable development goals.",
  },
  // Kept for reference while the client clarifies whether this service should be deleted or revised.
  // {
  //   id: "construction-observation-administration",
  //   title: "Construction Observation & Administration",
  //   description: "Ensuring quality and compliance during construction phases.",
  //   image: obsadm,
  //   longText:
  //     "Our Construction Observation & Administration services provide oversight to guarantee that projects meet design standards and regulatory requirements. By closely monitoring construction phases, we ensure every detail aligns with approved plans. Our team collaborates with contractors, addresses on-site challenges, and keeps stakeholders informed, ensuring seamless project progression and successful delivery.",
  // },
  {
    id: "value-engineering",
    title: "Value Engineering",
    description:
      "Optimizing designs to maximize functionality and minimize costs.",
    image: valueEng,
    longText:
      "Value Engineering focuses on enhancing project outcomes by identifying opportunities to improve efficiency without compromising quality. Our team evaluates designs, construction methods, and materials to find cost-effective solutions. By integrating client goals and performance requirements, we ensure projects deliver maximum value, achieving both economic and functional excellence.",
  },
  {
    id: "feasibility-study-reports",
    title: "Feasibility Study & Reports",
    description: "Evaluating project viability through comprehensive analysis.",
    image: feasibility,
    longText:
      "Our Feasibility Study & Reports services provide clients with in-depth evaluations of potential projects. We analyze technical, economic, and environmental factors to determine viability. By delivering clear and actionable insights, we empower stakeholders to make informed decisions and mitigate risks, ensuring that projects align with budgetary and strategic objectives.",
  },
  {
    id: "building-investigations",
    title: "Building Investigations",
    description:
      "Analyzing structures for safety, compliance, and performance improvements.",
    image: BuildingInv,
    longText:
      "Building Investigations are essential for ensuring structural safety and optimizing performance. Our experts conduct detailed assessments to identify issues related to wear, compliance, or potential risks. From historical buildings to modern constructions, we provide actionable recommendations that enhance durability, improve safety, and support informed decision-making for renovations or repairs.",
  },
  {
    id: "threshold-inspections",
    title: "Threshold Inspections",
    description:
      "Verifying structural work complies with approved plans, specifications, and code requirements.",
    image: thresholdInspections,
    longText:
      "Our Threshold Inspection services provide qualified review during construction to help verify that structural work is performed in accordance with approved plans, specifications, and applicable code requirements. ASM supports owners, architects, contractors, and public agencies with reliable inspection documentation and practical construction-phase coordination.",
  },
  {
    id: "milestone-inspections",
    title: "30/40/50-Year & Milestone Inspections",
    description:
      "Assessing existing buildings for structural condition, safety, and recertification requirements.",
    image: milestoneInspections,
    longText:
      "ASM provides building recertification and milestone inspection support for existing structures, evaluating visible structural conditions, safety concerns, and repair needs. Our team prepares clear findings and recommendations to help building owners understand requirements and plan responsible maintenance or restoration work.",
  },
];
