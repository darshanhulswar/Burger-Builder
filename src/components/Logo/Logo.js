import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

function Logo(props) {
  return (
    <img
      src={burgerLogo}
      alt="My Burger LOGO"
      className={classes.Logo}
      style={{height: props.height}}
    />
  );
}

export default Logo;
