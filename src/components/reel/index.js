import './reel.css';

const Reel = (props) => {
  return (
    <div>
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
      <div className='d-flex justify-content-center videoTitle'>
            <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Reel;