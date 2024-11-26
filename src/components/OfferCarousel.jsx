import { useState, useEffect } from "react";
import { Carousel } from "antd";
import CarouselItem from "./CarouselItem";
import { groupCarouselItems } from "../utils/helperFunctions";
import { SERVICES } from "../utils/constants";

import styles from "./OfferCarousel.module.css";

function OfferCarousel() {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
        setItemsPerPage(1); // Móvil: 1 elemento
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2); // Tablets: 2 elementos
      } else {
        setItemsPerPage(3); // Escritorio: 3 elementos
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Llama al resize al cargar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedItems = groupCarouselItems(SERVICES, itemsPerPage);

  return (
    <Carousel autoplay arrows>
      {groupedItems.map((group, index) => (
        <div key={index} className={styles.offerCarouselItem}>
          {group.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
}

export default OfferCarousel;
