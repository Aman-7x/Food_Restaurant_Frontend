import instagramIcon from "../../assets/images/icons/icons8-instagram-old-48.png";
import youtubeIcon from "../../assets/images/icons/icons8-youtube-50.png";
import pinterestIcon from "../../assets/images/icons/icons8-pinterest-24.png";
import linkedInIcon from "../../assets/images/icons/icons8-linkedin-50.png";
import twitterIcon from "../../assets/images/icons/icons8-twitter-bird-50.png";
import googleIcon from "../../assets/images/icons/icons8-google-old-50.png";
import facebookIcon from "../../assets/images/icons/icons8-facebook-50.png";
import whatsAppIcon from "../../assets/images/icons/icons8-whatsapp-48.png";
import noodle from "../../assets/images/nudels.png";
import noodle2 from "../../assets/images/noodles02.png";

export const Footer = ()=>{

    return<>
          <div className="section-7 container-fluid position-relative">
        <img src={noodle2} className="footer-left-img" />
        <div className="container h-100">
          <div className="row d-flex justify-content-around h-100">
            <div className="col-md-3 footer-col-1">
              <h2 className="s-7-d1-h2 about-title mb-5">
                Take it easy with location
              </h2>
              <p className="footer-text">112 - Legre ancilae vix ne.</p>
              <p className="footer-text">Te elit putent propriae eum,</p>
              <p className="footer-text footer-phone">phone: 9111 440 529</p>
              <p className="footer-text">Email: amankhan44899@gmail.com</p>
              <div className="social-links mt-md-5 mx-md-3">
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

            <div className="col-md-3">
              <div className="footer-col-1">
                <h2 className="about-title">Working Hours</h2>

                <h3 className="footer-text footer-subheading">Monday To Friday</h3>
                <p className="footer-text">8:00am to 10:00pm(Breakfast)</p>
                <p className="footer-text">11:00am to 10:00pm(Lunch/Diner)</p>

                <h3 className="footer-text footer-subheading">Saturday & Sunday</h3>
                <p className="footer-text">10:00am to 11:00pm(Brunch)</p>
                <p className="footer-text">11:00am to 12:00pm(Lunch/Dinner)</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-container">
                <h2 className="about-title">Feedback form</h2>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="input placeholder"
                />
                <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="input placeholder"
                />
                <br />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="input placeholder"
                />
                <br />
                <textarea
                  name=""
                  id="textarea"
                  className="input"
                  cols="37"
                  rows="4"
                  placeholder="Message"
                ></textarea
                ><br />
                <input
                  type="button"
                  value="Submit"
                  className="btn custom-btn footer-btn"
                />
              </div>
            </div>
          </div>
        </div>

        <img src={noodle} className="footer-right-img" />
      </div>
      <div className="text-center text-light footer-copy-right">
        <p>Developed By - Aman Khan</p>
      </div>
    </>
}