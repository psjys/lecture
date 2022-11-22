import Carosel from "./components/carousel/Carosel";

const AutoSlide = () => {
  const images = [
    '/images/slides/main_pic1.jpg',
    '/images/slides/main_pic2.jpg',
    '/images/slides/main_pic3.jpg',
  ];

  return (
    <>
      <Carosel images={images} interval={4000} indicators controls />
    </>
  );
};

export default AutoSlide;
