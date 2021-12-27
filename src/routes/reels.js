import ReactPlayer from 'react-player'

export default function Reels() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="embed-responsive embed-responsive-16by9">
              <ReactPlayer
                url="https://vimeo.com/260102422"
              />
              <p><a href="https://vimeo.com/153468982">Dennis Hurley 2016</a> from <a href="https://vimeo.com/user7741948">Jonathan Millett</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer
                url="https://vimeo.com/260102422"
              />
              <p><a href="https://vimeo.com/260102422">Dennis Hurley Acting Reel 2018</a> from <a href="https://vimeo.com/user22156784">Jason Hough</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
        </div>
  </div>
    );
  }