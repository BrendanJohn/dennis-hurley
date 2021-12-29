import { Carousel } from 'react-carousel-minimal';
import "./carousel.css";

const NewCarousel = () => {
 const data = [
    {
      id: 1,
      image: "/images/dennislaughing.jpg",
    },  
    {
      id: 2,
      image: "/images/headshot42.jpg",
    },
    {
      id: 3,
      image: "/images/headshotThree.jpg",
    },
    {
      id: 4,
      image: "/images/headshotFour.jpg",
    },
    {
      id: 5,
      image: "/images/headshotFive.jpg",
    },
    {
      id: 6,
      image: "/images/headshotOne.jpg",
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={1700}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewCarousel;