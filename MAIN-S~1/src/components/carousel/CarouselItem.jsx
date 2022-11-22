const CarouselItem = ({ src, stopSlide, startSlide }) => {
  return (
    <>
      <div
        className='carousel-item'
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      >
        <img src={src} alt='img' />
      </div>
    </>
  );
};

export default CarouselItem;
