import './reel.css';

const Reel = (props) => {
  const isYouTube = props.youtubeId;
    if (isYouTube) {
      return (
      <div>
      <div className='d-flex justify-content-center videoTitle'>
            <h3>{props.title}</h3>
      </div>
        <div className='videoWrapper'>
            <iframe 
              title={props.title} 
              width='560' 
              height='349' 
              src={'https://www.youtube.com/embed/' + props.youtubeId } 
              frameBorder='0' 
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
              allowFullScreen> 
            </iframe>
        </div>
    </div>  
      );
    }
    else {
      return (
        <div>
        <div className='d-flex justify-content-center videoTitle'>
              <h3>{props.title}</h3>
        </div>
          <div className='videoWrapper'>
              <iframe 
                title={props.title} 
                width='560' 
                height='349' 
                src={'https://player.vimeo.com/video/' + props.vimeoId }
                frameBorder='0' 
                allowFullScreen>         
              </iframe>
          </div>
        </div>  
        );
      }
    }

export default Reel;