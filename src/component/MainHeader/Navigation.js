import React from "react";

import classes from "./Navigation.module.css";
import Button from "../UI/Button";

const Navigation = (props) => {
  const addFoodModal = () => {
    props.setAdd("Add");
  };

  const createFoodModal = () => {
    props.setAdd("Create");
  };

  const createMaterialModal = () => {
    props.setAdd("Material");
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Button onClick={createMaterialModal}>Hozzávalók</Button>
        </li>
        <li>
          <Button onClick={addFoodModal}>Étel hozzáadása</Button>
        </li>
        <li>
          <Button onClick={createFoodModal}>Étel készítése</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
