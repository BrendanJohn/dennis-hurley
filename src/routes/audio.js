import ReactAudioPlayer from 'react-audio-player';
import audioFile from '../files/dennisAudioReel.mp3'
import '../index.css';

export default function Audio() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card d-flex justify-content-center audioCard">
          <img className="card-img-top" src="./images/headshotOne.jpg" alt="2021 Commercial Voice Reel"></img>
            <div className="card-body">
              <h5 className="card-title">2021 Commercial Voice Reel</h5>
              <p className="card-text ">2021 Commercial Voice Reel</p>
                <ReactAudioPlayer
                src={audioFile}
                autoPlay
                controls
              />
            </div>
        </div>
      </div>
    );
  }