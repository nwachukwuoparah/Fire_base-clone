import logo from "./Head comp images/lockup.svg";
import Dropdown from "./dropdown.js";
import "./header.css";
import logo1 from "./Head comp images/ad-mob.svg";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header1">
        <img src={logo} alt="img" />
        <div className="ulList">
          <Dropdown text1="Product" />
          <Dropdown text1="Solution" />
          <Dropdown text1="Pricing" />
          <Dropdown text1="Docs" />
          <Dropdown text1="Community" />
          <Dropdown text1="Support" />
        </div>
      </div>
      <div className="header3">
        <input className="input" type="text" placeholder="Search"></input>
        <select className="select1">
          <option selected value="English">
            English
          </option>
          <option value="French">French</option>
          <option value="Yoruba">Yoruba</option>
        </select>
        <h6>GO to console</h6>
        <h3>---</h3>
        <img style={{ width: 25 }} src={logo1} alt="img" />
      </div>
    </div>
  );
};

export default Header;
