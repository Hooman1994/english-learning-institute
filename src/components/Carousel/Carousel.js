import { Carousel } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import styles from "../../components/Carousel/Carousel.module.scss";
import {carouselData} from "../../utility/data";

function CarouselComponent() {
  return (
    <div className={styles.container}>
      <Carousel autoplay swipeToSlide draggable>
        {carouselData.length &&
          carouselData.map((item, index) => {
            return (
              <div key={index} className={styles.image}>
                <img src={item.imageSource} alt={item.alt}></img>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
