import PageHeader from "../../components/PageHeader";
import ServicesGrid from "./ServicesGrid";
import pageHeaderImg from "../../assets/images/services-page-header.webp";

function Services() {
  return (
    <main>
      <PageHeader title="services" img={pageHeaderImg} />
      <ServicesGrid />
    </main>
  );
}

export default Services;
