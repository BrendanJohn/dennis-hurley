import ReactAudioPlayer from 'react-audio-player';
import audioFile from '../files/dennisAudioReel.mp3'
import audioFileTwo from '../files/essential.mp3'
import '../index.css';

export default function Audio() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="card d-flex justify-content-center audioCard">
            <img className="card-img-top" src="./images/headshotOne.jpg" alt="2021 Commercial Voice Reel"></img>
              <div className="card-body">
                <h5 className="card-title">2021 Commercial Voice Reel</h5>
                <p className="card-text ">2021 Commercial Voice Reel</p>
                  <ReactAudioPlayer
                  src={audioFile}
                  controls
                />
              </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <div className="card d-flex justify-content-center audioCard">
            <img className="card-img-top" src="./images/glasses2.jpg" alt="Essential Workers Audio"></img>
              <div className="card-body">
                <h5 className="card-title">Essential Workers Audio</h5>
                <p className="card-text ">Essential Workers Audio</p>
                  <ReactAudioPlayer
                  src={audioFileTwo}
                  controls
                />
              </div>
          </div>
          </div>
    </div>
    );
  }