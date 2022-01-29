import React from "react";
import Button from "../UI/Button";

import classes from "./ListMaterials.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListMaterials = (props) => {
  const deleteMaterial = (event) => {
    event.preventDefault();
    removeMaterial(event.target.textContent);
  };

  const removeMaterial = (material) => {
    props.setNewList(props.materialList.filter((item) => item !== material));
  };

  return (
    <div className={classes.div}>
      <ul className="container">
        {props.materialList.map((item) => (
          <form key={item} className="row" onSubmit={deleteMaterial}>
            <li className="col-11">{item}</li>
            <Button type="submit" className="btn btn-outline-danger col-1">
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </Button>
          </form>
        ))}
      </ul>
    </div>
  );
};

export default ListMaterials;
