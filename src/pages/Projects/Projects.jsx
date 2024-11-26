import PageHeader from "../../components/PageHeader";
import headerImg from "../../assets/images/projects-header.webp";
import { Outlet } from "react-router-dom";

function Projects() {
  return (
    <main>
      <PageHeader title="projects" img={headerImg} />
      <Outlet />
    </main>
  );
}

export default Projects;
