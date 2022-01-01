import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

const NewCarousel = () => {
  return (
    <div>
      <div>
      <Carousel
        className="carousel-wrapper"
        autoPlay = {true}
        infiniteLoop = {true}
        interval = {3500}
        showThumbs={false}
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "20px auto",
        }} >
        <div>
          <img src="/images/dennislaughing.jpg" />
        </div>
        <div>
          <img src="/images/headshot42.jpg" />
        </div>
        <div>
          <img src="/images/headshotThree.jpg" />
        </div>
        <div>
          <img src="/images/headshotFour.jpg" />
        </div>
        <div>
          <img src="/images/headshotFive.jpg" />
        </div>
        <div>
          <img src="/images/headshotOne.jpg" />
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default NewCarousel;