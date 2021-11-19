import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header.styles.css";

// Logo
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
