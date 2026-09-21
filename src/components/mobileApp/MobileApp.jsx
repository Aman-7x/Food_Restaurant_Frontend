import mobile from "../../assets/images/assets section-6/phone-img.webp";
import playStore from "../../assets/images/googlePlay.png";
import appStore from "../../assets/images/assets section-6/app-store.webp";

export const MobileApp = () => {
  return (
    <div className="s-6-main container-fluid">
      <div className="row">
        <div className="col-md-5 sec-6-col-1 pt-5  ">
          <img src={mobile} className="s-6-phone-img" alt="" />
        </div>
        <div className="col-md-6 sec-6-col-2  ">
          <h2 className="s-6-d1 about-title">Happy to announce</h2>
          <h1 className="s-6-d2 main-heading">MOBILE APP</h1>
          <h2 className="s-6-d3 main-heading">
            IS AVAILABLE IN EVERY OS PLATFORM.
          </h2>
          <div className="info-apps">
            <img src={playStore} className="s-6-google-play-store" />
            <img src={appStore} alt="" className="s-6-app-store" />
          </div>
        </div>
      </div>
    </div>
  );
};
