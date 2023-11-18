import banner from "..//../assets/banner/BannerArea.png";
import "./BannerArea.css";
const BannerArea = () => {
  return (
    <div className="banner-area">
      <img src={banner} alt="Banner" />
      <div className="dots">
        <div></div>
        <div id="dot-active"></div>
        <div></div>
      </div>
    </div>
  );
};

export default BannerArea;
