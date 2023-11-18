import logo from "../../assets/Logo.png";
import profile from "../../assets/header/Profile.png";
import shop from "../../assets/header/Shop.png";
import heart from "../../assets/header/Heart.png";
import search from "../../assets/header/Vector.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Company logo" className="header-logo" />
      <div className="header-search">
        <img src={search} alt="Search icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-icons">
        <img src={profile} alt="Profile icon" />
        <img src={heart} alt="Heart icon" />
        <img src={shop} alt="Cart icon" />
      </div>
    </div>
  );
};

export default Header;
