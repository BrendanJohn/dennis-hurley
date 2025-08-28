import './contact-card.css'

const config = {
  servId: 'cl8t3e61z000709l0fy773k38',
  servPID: 'cl8t3e61z000809l0yk88mw73',
  userEmail: 'test@feedbackisgreat.com',
  userFirstName: 'Brendan',
  userLastName: 'Murphy',
};

const ContactCard = () => {
    return (
      <div>
          <div className="d-flex justify-content-center">
            <div className="card contactCard" >
              <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <h6 className="card-subtitle mb-2 text-muted">Manager: Jason Hough, Kord Enterprises</h6>
                <br />
                <span className="card-text">jason@kordmanagement.com</span>
                <br />
                <span className="card-text">(727) 598-5140</span>
                <br />
                <img className="card-img-top contactCard" src="./images/Koro.png" alt="Dennis Hurley"></img>
              </div>
            </div>
      </div>
    </div>
    );
  };
  export default ContactCard;