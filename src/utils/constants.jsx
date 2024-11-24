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
    longText:
      "Our Civil Engineering Design services prioritize delivering innovative solutions tailored to meet project requirements. From roadways to water systems, we handle a wide array of engineering challenges with precision. By integrating advanced modeling tools, we ensure compliance with regulations and maximize efficiency in design execution. We aim to enhance functionality while supporting sustainable development goals.",
  },
  {
    id: 2,
    title: "Structural Design",
    description:
      "Crafting safe and efficient frameworks for buildings and infrastructure.",
    image: structural,
    longText:
      "Structural Design is at the core of what we do, focusing on creating reliable frameworks that ensure safety and performance. From high-rise buildings to industrial structures, our team employs cutting-edge techniques to optimize designs. Whether managing complex loads or addressing environmental factors, our designs aim for durability, cost-efficiency, and architectural harmony.",
  },
  {
    id: 3,
    title: "Construction Observation & Administration",
    description: "Ensuring quality and compliance during construction phases.",
    image: obsadm,
    longText:
      "Our Construction Observation & Administration services provide oversight to guarantee that projects meet design standards and regulatory requirements. By closely monitoring construction phases, we ensure every detail aligns with approved plans. Our team collaborates with contractors, addresses on-site challenges, and keeps stakeholders informed, ensuring seamless project progression and successful delivery.",
  },
  {
    id: 4,
    title: "Value Engineering",
    description:
      "Optimizing designs to maximize functionality and minimize costs.",
    image: valueEng,
    longText:
      "Value Engineering focuses on enhancing project outcomes by identifying opportunities to improve efficiency without compromising quality. Our team evaluates designs, construction methods, and materials to find cost-effective solutions. By integrating client goals and performance requirements, we ensure projects deliver maximum value, achieving both economic and functional excellence.",
  },
  {
    id: 5,
    title: "Preparation of Plans",
    description: "Developing precise and detailed plans for project execution.",
    image: planpre,
    longText:
      "Preparation of Plans is a crucial stage where attention to detail and accuracy are paramount. Our team develops comprehensive drawings and specifications tailored to each project’s needs. By employing advanced tools and collaborative workflows, we ensure seamless integration between design and construction phases, facilitating efficient execution and reducing potential delays.",
  },
  {
    id: 6,
    title: "Feasibility Study & Reports",
    description: "Evaluating project viability through comprehensive analysis.",
    image: feasibility,
    longText:
      "Our Feasibility Study & Reports services provide clients with in-depth evaluations of potential projects. We analyze technical, economic, and environmental factors to determine viability. By delivering clear and actionable insights, we empower stakeholders to make informed decisions and mitigate risks, ensuring that projects align with budgetary and strategic objectives.",
  },
  {
    id: 7,
    title: "Construction Documents",
    description:
      "Creating detailed construction documents for project execution.",
    image: consDocs,
    longText:
      "Construction Documents are the blueprint for successful project execution. We produce detailed plans, specifications, and schedules that guide every construction phase. By incorporating client requirements and regulatory standards, our documents ensure clarity, precision, and efficiency. These deliverables form the foundation for seamless collaboration between design teams and contractors.",
  },
  {
    id: 8,
    title: "Planning & Cost Estimations",
    description:
      "Providing accurate and up-to-date cost estimates for project execution.",
    image: cost,
    longText:
      "Planning & Cost Estimations ensure projects stay on track both financially and strategically. Our team develops detailed budgets based on thorough analysis of materials, labor, and timelines. By using advanced estimating tools and market data, we provide accurate projections that enable clients to plan confidently and allocate resources effectively.",
  },
  {
    id: 9,
    title: "Building Investigations",
    description:
      "Analyzing structures for safety, compliance, and performance improvements.",
    image: BuildingInv,
    longText:
      "Building Investigations are essential for ensuring structural safety and optimizing performance. Our experts conduct detailed assessments to identify issues related to wear, compliance, or potential risks. From historical buildings to modern constructions, we provide actionable recommendations that enhance durability, improve safety, and support informed decision-making for renovations or repairs.",
  },
];
