import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

const NewCarousel = () => {
  return (
    <div>
      <div>
      <Carousel
        className='carousel-wrapper'
        autoPlay = {true}
        infiniteLoop = {true}
        interval = {3000}
        showThumbs={false}
        showStatus={false}
        style={{
          textAlign: 'center',
          maxWidth: '850px',
          maxHeight: '500px',
          margin: '20px auto',
        }} >  
         <div>
          <img src='/images/dennisHighQuality.jpeg' alt='dennis headshot two'/>
        </div>
        <div>
          <img src='/images/headshotFive.jpg' alt='dennis headshot four'/>
        </div>
        <div>
          <img src='/images/headshotOne.jpg' alt='dennis headshot five'/>
        </div>
        <div>
          <img src='/images/headshot42.jpg' alt='dennis headshot one'/>
        </div>
        <div>
          <img src='/images/headshot.jpg' alt='dennis headshot three'/>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default NewCarousel;