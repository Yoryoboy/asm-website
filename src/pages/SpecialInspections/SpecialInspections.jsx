// Component for the Special Inspections page
import styles from "./SpecialInspections.module.css";

function SpecialInspections() {
  return (
    <section className={styles.container}>
      <article className={styles.content}>
        <h1>Inspection Services</h1>
        <h2>Ensuring Safety, Code Compliance, and Long-Term Performance</h2>
        
        <div className={styles.mainContent}>
          <p>
            At ASM Consulting Engineers, we offer comprehensive inspection services to support 
            safe and compliant construction across a wide range of building types. Our team 
            includes licensed Special Inspectors and experienced engineers who bring technical 
            knowledge and attention to detail to every inspection we perform.
          </p>
          
          <h3>Threshold Inspections</h3>
          <p>
            Under Florida Statute 553.71, a &quot;threshold building&quot; is defined as any structure 
            greater than three stories or 50 feet in height, or one with an assembly occupancy 
            of 500 people or more and over 5,000 square feet. These buildings require special 
            structural inspections during construction to ensure code compliance and structural safety.
          </p>
          <p>
            Our licensed Special Inspectors perform these inspections in accordance with the 
            engineer-of-record&apos;s threshold inspection plan. We monitor structural elements 
            during key construction phases, promptly report any discrepancies, and issue a 
            final conformance letter upon completion.
          </p>
          
          <h3>30/40-Year Building Recertification</h3>
          <p>
            In both Miami-Dade and Broward Counties, commercial and multi-family buildings must 
            undergo a mandatory structural and electrical inspection at 30 or 40 years of age, 
            depending on the municipality. These inspections are essential for identifying signs 
            of aging, deterioration, and structural deficiencies before they become hazardous.
          </p>
          <p>
            Our team conducts thorough visual inspections of the building&apos;s major structural 
            components—such as the foundation, roof, slabs, framing systems, and balconies. We 
            provide a clear, detailed report with photo documentation, outlining any needed repairs 
            and certifying the building&apos;s condition in accordance with local recertification requirements.
          </p>
          
          <h3>Structural Integrity Reserve Study</h3>
          <h4>Proactive Planning for Long-Term Building Safety and Maintenance</h4>
          <p>
            In accordance with Florida Senate Bill 4-D (effective January 1, 2025), condominium 
            and cooperative associations are now required to perform a Structural Integrity Reserve 
            Study (SIRS) for buildings three stories or taller. This study is essential to ensure 
            that critical structural components are adequately funded and maintained over time.
          </p>
          <p>
            At ASM Consulting Engineers, we provide expert-led SIRS evaluations designed to help 
            property owners and associations meet legal requirements while preserving building 
            safety and value. Our licensed structural engineers inspect and assess key elements such as:
          </p>
          <ul className={styles.servicesList}>
            <li>Roofs</li>
            <li>Load-bearing walls and primary structural systems</li>
            <li>Floors and foundations</li>
            <li>Exterior painting and waterproofing</li>
            <li>Windows and doors</li>
            <li>Balconies, railings, and other critical components</li>
          </ul>
          <p>
            Following the inspection, we prepare a comprehensive report outlining the current 
            condition of each element and the estimated remaining useful life, along with budgetary 
            recommendations for reserve funding. This forward-looking study is a crucial tool for 
            long-term maintenance planning and legal compliance.
          </p>
        </div>
      </article>
    </section>
  );
}

export default SpecialInspections;
