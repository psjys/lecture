import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import CaroselControl from "./CaroselControl";
import CaroselIndicator from "./CaroselIndicator";
import CarouselItem from "./CarouselItem";

const Carosel = ({ images, interval = 5000, controls = false, indicators = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalId = useRef();

  const prev = () => {
    startSlideTimer();

    const index = currentSlide > 0 ? currentSlide - 1 : images.length - 1;

    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();

    const index = currentSlide < images.length - 1 ? currentSlide + 1 : 0;

    setCurrentSlide(index);
  };

  const startSlideTimer = useCallback(() => {
    stopSlideTimer();

    intervalId.current = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < images.length - 1 ? currentSlide + 1 : 0);
    }, interval);
  }, [interval, images.length]);

  const stopSlideTimer = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, [startSlideTimer]);

  return (
    <>
      <div className="carousel">
        <div
          className='carousel-img-list'
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              src={item}
              stopSlide={stopSlideTimer}
              startSlide={startSlideTimer}
            />
          ))}
        </div>

        {indicators && (
          <CaroselIndicator
            images={images}
            currentIndex={currentSlide}
            switchIndex={switchIndex}
          />
        )}
        {controls && <CaroselControl prev={prev} next={next} />}
      </div>
    </>
  );
};

export default Carosel;
