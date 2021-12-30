import Reel from '../components/reel'

export default function Press() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="card d-flex justify-content-center bioCard">
            <img className="card-img-top" src="./images/starTrek.jpg" alt="2021 Commercial Voice Reel"></img>
            <div className="card-body">
              <h5 className="card-title">Star Trek Beyond: Simon Pegg gives blessing to Jaylah spoof</h5>
              <h6 className="card-subtitle mb-2 text-muted">Simon Pegg gives his blessing to 'funniest, sweetest parody'</h6>
              <h6 className="card-subtitle mb-2 text-muted">July 17, 2016</h6>
              <p className="card-text">        
              Even before Justin Lin's Star Trek Beyond hits theaters on July 22, the parodies are rolling out. 
              According to the film's Scotty, Simon Pegg, this one is already at the head of the pack...
              </p>
              <a href="https://ew.com/article/2016/07/17/star-trek-jaylah-bed-bath-beyond-parody/" className="btn btn-primary">Read on Entertainment Weekly</a>
            </div>
          </div>
          </div>

        <div className='d-flex justify-content-center videoTitle'>
        </div>
          <Reel 
            youtubeId='AX4XxUjKTdo?t=130s'
            title='Dennis Hurley in the News - The Albino Code'>
          </Reel>
      </div>
    );
  }