import React from "react";
import { data as slides } from "./data";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./ImageSlider.module.scss";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const src = slides[currentIndex].src;
  const title = slides[currentIndex].title;

  return (
    <div className={styles.carousel}>
      <div className={styles.imgItem}>
        <Image src={src} alt={title} className={styles.img} layout="fill" />
        <div className={styles.gradient} />
      </div>

      <div className={styles.actions}>
        <div className={styles.prevBtn} onClick={goToNext}>
          <FaChevronLeft />
        </div>
        <div className={styles.nextBtn} onClick={goToPrevious}>
          <FaChevronRight />
        </div>
      </div>

      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default ImageSlider;
