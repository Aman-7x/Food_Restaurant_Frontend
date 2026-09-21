import diningTable2 from "../../assets/images/dinintTable02.png";
import diningTable from "../../assets/images/diningTable.png";
import chillies from "../../assets/images/chilliesImg.png";

export const AboutUs=()=>{

    return(
         <div className="about-section container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="img-wrapper tilted-img">
                <img src={diningTable2} className="img-fluid" />
              </div>
              <div className="img-wrapper straight-img">
                <img src={diningTable} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7 right-section">
              <h3 className="about-title">About us</h3>
              <h2 className="main-heading">WE ARE TASTY</h2>
              <p className="lead-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laudantium?
              </p>
              <p className="body-text">
                dard dummy text ever since the 1500s, when an unknown printer
                took Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deleniti cumque excepturi illo. Velit saepe at
                officia eaque numquam est et magnam ad quas a vitae, autem
                pariatur explicabo deserunt eius atque praesentium commodi.
              </p>

              <button className="btn custom-btn text-white mt-3">Click here</button>
            </div>
          </div>
        </div>
        <img src={chillies} className="chillie-img" />
        
      </div>
    );
}