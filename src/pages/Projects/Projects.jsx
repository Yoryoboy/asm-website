import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectsHero from "../../components/ProjectsHero";
import headerImg from "../../assets/images/projects-header.webp";

function Projects() {
  const { id } = useParams();

  return (
    <main>
      {id ? (
        <PageHeader title="projects" img={headerImg} />
      ) : (
        <ProjectsHero />
      )}
      <Outlet />
    </main>
  );
}

export default Projects;
