import specialRecipe from "../../assets/images/specialReciepie.png";

export const SpecialRecipe=()=>{

    return(
         <div className="special-recipe-section container-fluid position-relative">
        <div className="container">
          <div className="row align-items-center d-flex justify-content-center">
            <div className="col-md-3 special-recipe-left-section">
              <h3 className="about-title">Special Recipes</h3>
              <h2 className="main-heading">Taste Of Precious</h2>
              <p className="lead-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                atque nostrum eaque.
              </p>

              <p className="body-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                sequi quidem aut sint harum expedita, repellat labore nihil
                aliquam quibusdam sit maiores? Voluptas modi, dicta quos ut
                exercitationem nam veniam tempore iure reprehenderit autem fugit
                earum cupiditate mollitia animi consequuntur! Fugit illum
                obcaecati architecto nemo.
              </p>

              <button className="btn custom-btn text-white mt-3">Click Here</button>
            </div>

            <div className="col-md-6 special-recipe-right-section">
              <img src={specialRecipe} className="img-fluid" />
            </div>
          </div>
        </div>
       
      </div>
);
}