import logoBG from "../../assets/images/logoBg.png";
import logoText from "../../assets/images/FoodRest.png";
import timeIcon from "../../assets/images/icons/icons8-time-64.png";
import callIcon from "../../assets/images/icons/icons8-call-50.png";
import instagramIcon from "../../assets/images/icons/icons8-instagram-old-48.png";
import youtubeIcon from "../../assets/images/icons/icons8-youtube-50.png";
import pinterestIcon from "../../assets/images/icons/icons8-pinterest-24.png";
import linkedInIcon from "../../assets/images/icons/icons8-linkedin-50.png";
import twitterIcon from "../../assets/images/icons/icons8-twitter-bird-50.png";
import googleIcon from "../../assets/images/icons/icons8-google-old-50.png";
import facebookIcon from "../../assets/images/icons/icons8-facebook-50.png";
import whatsAppIcon from "../../assets/images/icons/icons8-whatsapp-48.png";

export const SubHeader = () => {
  return (
    <div className="subHeader text-center">
      <div className="logoWrapper">
        <img className="logoBg" src={logoBG} alt="Yellow Background" />
        <img
          className="foodRestLogo"
          src={logoText}
          alt="Food Restaurant Logo"
        />
      </div>

      <div className="top-bar">
        <div className="info-group">
          <span>
            <img style={{ width: "24px" }} src={timeIcon} />
            Order Foods 24/7
          </span>
          <span>
            <img src={callIcon} /> 9111-440-529
          </span>
        </div>
        <div className="social-links">
          <img src={facebookIcon} />
          <img src={googleIcon} />
          <img src={twitterIcon} />
          <a
            href="https:www.linkedin.com/in/aman-khan-35b95329a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} />
          </a>
          <img src={pinterestIcon} />
          <img src={youtubeIcon} />
          <a
            href="https://wa.me/9111440529"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsAppIcon} />
          </a>
          <img src={instagramIcon} />
        </div>
      </div>
    </div>
  );
};
