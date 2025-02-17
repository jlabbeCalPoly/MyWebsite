import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/profile-picture.jpg";
import BarsIcon from "../assets/bars.svg";
import DropdownIcon from "../assets/dropdown.svg";
import "./Navbar.css";

function Navbar() {
  /* click logic from @briandesign */
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showDropdown = () => {
    if (window.innerWidth <= 720) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    showDropdown();
  }, []);

  window.addEventListener("resize", showDropdown);

  return (
    <div className="nav">
      {/* container for our profile picture/description section */}
      <Link to="/" onClick={closeMobileMenu} className="profile">
        <img src={ProfilePic} className="profile-pic"></img>
        <ul className="profile-desc">
          <li className="desc">
            <h3>JULIAN LABBE</h3>
          </li>
          <li className="desc">
            <h6>GAME DESIGNER</h6>
          </li>
          <li className="desc">
            <h6>WEB DEVELOPER</h6>
          </li>
        </ul>
      </Link>
      {/* only visible when the menu-icon is enabled */}
      <div className="hide"></div>
      {/* container for our navigation links */}
      <div className="menu" onClick={handleClick}>
        <img className="menu-icon" src={click ? DropdownIcon : BarsIcon}/>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            <h3 className="nav-text">HOME</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>
            <h3 className="nav-text">PROJECTS</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
            <h3 className="nav-text">CONTACT</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
