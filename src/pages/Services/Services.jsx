import { Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import pageHeaderImg from "../../assets/images/services-page-header.webp";

function Services() {
  return (
    <main>
      <PageHeader title="services" img={pageHeaderImg} />
      <Outlet />
    </main>
  );
}

export default Services;
