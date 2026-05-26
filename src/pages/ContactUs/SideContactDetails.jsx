import { HiMail } from "react-icons/hi";
import { COMPANY_INFO } from "../../utils/constants";
import SideContactDetailsContent from "./SideContactDetailsContent";
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./SideContactDetails.module.css";

function SideContactDetails() {
	return (
		<aside className={styles.sideContactDetails}>
			<SideContactDetailsContent
				title="E-mail"
				subtitle={COMPANY_INFO.email}
				icon={
					<HiMail
						style={{ fill: "#ff5200", minWidth: "30px", height: "30px" }}
					/>
				}
			/>
			<SideContactDetailsContent
				title="ADDRESS"
				subtitle={COMPANY_INFO.address}
				icon={
					<FaMapMarkerAlt
						style={{ fill: "#ff5200", minWidth: "30px", height: "30px" }}
					/>
				}
			/>
		</aside>
	);
}

export default SideContactDetails;
