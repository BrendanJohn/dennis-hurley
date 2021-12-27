import '../index.css';

export default function Reels() {
    return (
    <div className="wrapper">
      <div className="videoWrapper">
        <iframe 
          title="Dennis Hurley Acting Reel 2018" 
          width="560" 
          height="349" 
          src="https://player.vimeo.com/video/260102422?h=1bf416d551" 
          frameBorder="0" 
          allowFullScreen>         
        </iframe>
      </div>
      <div className="d-flex justify-content-center">
        <h3>2018 Acting Reel</h3>
      </div>
      <div className="videoWrapper">
        <iframe 
          title="Dennis Hurley Acting Reel 2016" 
          width="560" 
          height="349" 
          src="https://player.vimeo.com/video/153468982?h=ccf494b0f9" 
          frameBorder="0" 
          allowFullScreen>         
        </iframe>
      </div>
      <div className="d-flex justify-content-center">
        <h3>2016 Acting Reel</h3>
      </div>
    </div>
    );
  }