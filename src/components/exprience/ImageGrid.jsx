import img1 from "../../assets/images/delightImg01.png";
import img2 from "../../assets/images/delightImg02.png";
import img3 from "../../assets/images/delightImg03.png";
import img4 from "../../assets/images/delightImg04.png";
import img5 from "../../assets/images/delightImg05.png";
import img6 from "../../assets/images/delightImg06.png";
import img7 from "../../assets/images/delightImg07.png";
import img8 from "../../assets/images/delightImg08.png";

export const ImageGrid = () => {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div id="imgGrid" >
      {imgArray.map((imgAdd, index) => (
        <div className="img-wrapper2">
          <img src={imgAdd} class="img-fluid imgTag" />
          <span class="img-meta">
            <p class="main-heading text-center title">
              Italian Source Mushroom
            </p>
            <p class="main-heading rate">$12</p>
            <button class="btn custom-btn text-white">Click Here</button>
          </span>
        </div>
      ))}
    </div>
  );
};
