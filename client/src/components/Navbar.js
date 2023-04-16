import "../assets/style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div id="header-custom">
        <span id="logo-custom">
          <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" style={{ width: "30px" }} />
        </span>
        <span id="nav-bar-custom">Hello Worlds        </span>
      </div>
    </div>
  );
}
