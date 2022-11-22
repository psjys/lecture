const CaroselIndicator = ({ images, currentIndex, switchIndex }) => {
  return (
    <>
      <div className='carosel-indicator'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`carosel-indicator-item ${currentIndex === index ? 'active' : ''}`}
            onClick={() => switchIndex(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default CaroselIndicator;
