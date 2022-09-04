import React from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import styles from "../main-page/MainPage.module.scss";
import { cardData } from "../../utility/data";

function ManiPage() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <CarouselComponent />
      </div>
      <div className={styles.content}>
        {cardData.length &&
          cardData.map((item, index) => {
            return (
              <div className={styles.card} key={item.id}>
                <Card
                  image={item.image}
                  alt={item.alt}
                  bodyOne={item.bodyOne}
                  bodyTwo={item.bodyTwo}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ManiPage;
