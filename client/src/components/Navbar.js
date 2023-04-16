import "../assets/style.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../logo.svg'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div id="header-custom">
        <span>
          <img src={logo} style={{ width: "30px" }} id="logo-custom" className="App-logo"/>
        </span>
        <span id="nav-bar-custom">Hello Worlds        </span>
      </div>
    </div>
  );
}
