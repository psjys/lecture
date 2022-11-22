const CaroselControl = ({ prev, next }) => {
  return (
    <>
      <button className="slide-button prev" onClick={prev}>
        <i className='fas fa-arrow-left'></i>
      </button>
      <button className="slide-button next" onClick={next}>
        <i className='fas fa-arrow-right'></i>
      </button>
    </>
  );
};

export default CaroselControl;
