import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A mi kis konyhánk</h1>
      <Navigation setAdd={props.setAdd} />
    </header>
  );
};

export default MainHeader;
