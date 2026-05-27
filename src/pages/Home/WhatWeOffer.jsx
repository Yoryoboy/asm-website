import OfferCarousel from "../../components/OfferCarousel";
import styles from "./WhatWeOffer.module.css";
function WhatWeOffer() {
	return (
		<section className={styles.whatWeOffer}>
			<h2 className={styles.whatWeOfferTitle}>WHAT WE OFFER</h2>
			<OfferCarousel />
		</section>
	);
}

export default WhatWeOffer;
