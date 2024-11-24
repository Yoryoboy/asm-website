import OfferCarousel from "../../components/OfferCarousel";
import styles from "./WhatWeOffer.module.css";
function WhatWeOffer() {
  return (
    <section>
      <h1 className={styles.whatWeOfferTitle}>WHAT WE OFFER</h1>
      <OfferCarousel />
    </section>
  );
}

export default WhatWeOffer;
