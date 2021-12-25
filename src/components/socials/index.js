import "./socials.css";
import { SocialIcon } from 'react-social-icons';

const Socials = ( ) => {
  return (
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-2 text-center" id="socials"></div>
      <div className="col-5 text-center" id="socials">
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.youtube.com/denhurley" />
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.vimeo.com/user582835" />
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="https://twitter.com/itsdendo" />
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://dennishurley.tumblr.com/" />
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://instagram.com/itsdendo" />
          <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.facebook.com/dendocomedy" />
      </div>
      <div className="col-2 text-center" id="socials"></div>
  </div>
  );
};

export default Socials;