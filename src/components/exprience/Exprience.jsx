import noodles from "../../assets/images/nudels.png";
import saladDish from "../../assets/images/saladDish.png";
import { ImageGrid } from "./ImageGrid";
export const Exprience = () => {
  return (
    <div className="delightSection container-fluid position-relative">
      <div className="container">
        <div className="row d-flex justify-content-center  align-items-center">
          <div className="col-md-12 text-center mb-5">
            <h3 className="about-title">Delightful</h3>
            <h3 className="main-heading">Experience</h3>
          </div>
          <div className="col-md-12">
            <div className="card">
              <ImageGrid />
            </div>
          </div>
        </div>
      </div>
      <img src={noodles} id="noodleImg" />
      <img src={saladDish} className="salad-dish img-fluid" />
    </div>
  );
};
