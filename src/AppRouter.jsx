import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ServicesGrid from "./pages/Services/ServicesGrid";
import ServiceDetails from "./pages/Services/ServiceDetails";
import AboutUs from "./pages/AboutUs/AboutUs";
import Projects from "./pages/Projects/Projects";
import ContactUs from "./pages/ContactUs/ContactUs";
import Gallery from "./components/Gallery";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import StructuralEngineering from "./pages/StructuralEngineering/StructuralEngineering";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />}>
      <Route index element={<ServicesGrid />} />
      <Route path=":id" element={<ServiceDetails />} />
    </Route>
    <Route path="/about" element={<AboutUs />} />
    <Route path="/projects" element={<Projects />}>
      <Route index element={<Gallery />} />
      <Route path=":id" element={<ProjectDetails />} />
    </Route>
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/structural-engineering" element={<StructuralEngineering />} />
  </Routes>
);

export default AppRouter;
