import { useState, useEffect } from "react";
import { Carousel } from "antd";
import CarouselItem from "./CarouselItem";
import { groupCarouselItems } from "../utils/helperFunctions";
import { SERVICES } from "../utils/constants";

import styles from "./OfferCarousel.module.css";

function getItemsPerPage() {
  if (window.innerWidth <= 700) {
    return 1;
  }

  if (window.innerWidth <= 900) {
    return 2;
  }

  return 3;
}

function OfferCarousel() {
  const [itemsPerPage, setItemsPerPage] = useState(() => getItemsPerPage());

  useEffect(() => {
    function handleResize() {
      const nextItemsPerPage = getItemsPerPage();

      setItemsPerPage((prevItemsPerPage) => {
        if (prevItemsPerPage === nextItemsPerPage) {
          return prevItemsPerPage;
        }

        return nextItemsPerPage;
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedItems = groupCarouselItems(SERVICES, itemsPerPage);

  return (
    <Carousel autoplay>
      {groupedItems.map((group) => {
        const firstItemId = group[0]?.id ?? "group-start";
        const lastItemId = group[group.length - 1]?.id ?? "group-end";

        return (
          <div
            key={`${firstItemId}-${lastItemId}`}
            className={styles.offerCarouselItem}
          >
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
        );
      })}
    </Carousel>
  );
}

export default OfferCarousel;
