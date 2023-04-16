import "../assets/style.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <div className="main">
      <div id="header-custom">
        <span>
          <img src={logo} style={{ width: "30px" }} id="logo-custom" className="App-logo" />
        </span>
        <span id="nav-bar-custom">
          <Link className="navbar-links" to="/adduser">
            {" "}
            <Button variant="primary" style={{ width: "100px", margin: "10px auto" }}>
              Add User
            </Button>{" "}
          </Link>{" "}
          <Link className="navbar-links" to="/">
            {" "}
            <Button variant="light" style={{ width: "100px", margin: "10px auto" }}>
              Home
            </Button>{" "}
          </Link>
        </span>
      </div>
    </div>
  );
}
