import "./socials.css";
import { SocialIcon } from 'react-social-icons';

const Socials = ( ) => {
  return (
    <div className="row">
    <div className="col-sm-6">
        <h1 className="site-title">DENNIS HURLEY</h1>
    </div>
    <div className="col-sm-1">
    </div>
    <div className="col-sm-5" id="socials">
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.youtube.com/denhurley" />
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.vimeo.com/user582835" />
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="https://twitter.com/itsdendo" />
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://dennishurley.tumblr.com/" />
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://instagram.com/itsdendo" />
        <SocialIcon style={{ height: 40, width: 40 }} className ="social-icon" url="http://www.facebook.com/dendocomedy" />
    </div>
</div>
  );
};

export default Socials;