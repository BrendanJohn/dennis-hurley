import { ServoiceFeedback } from 'react-feedback-widget';

const config = {
  servId: 'cl8t3e61z000709l0fy773k38',
  servPID: 'cl8t3e61z000809l0yk88mw73',
  userEmail: 'test@feedbackisgreat.com',
  userFirstName: 'Brendan',
  userLastName: 'Murphy',
};

export default function Contact() {
    return (
      <div>
          <div className="d-flex justify-content-center">
            <div className="card contactCard" >
              <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <h6 className="card-subtitle mb-2 text-muted">Jason Hough, Manager</h6>
                <span className="card-text"><strong>SpeedForce Enterprises</strong></span>
                <br />
                <span className="card-text">jason.hough01@gmail.com</span>
                <br />
                <span className="card-text">(256) 665-7731</span>
                <br />
                <img className="card-img-top contactCard" src="./images/sf4_2.jpeg" alt="speed force"></img>
                <ServoiceFeedback config={config}>
                  <button type="button">Feedback?</button>
                </ServoiceFeedback>
              </div>
            </div>
      </div>
    </div>
    );
  }