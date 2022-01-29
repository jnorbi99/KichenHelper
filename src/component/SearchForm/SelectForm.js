import React, { useRef, useContext } from "react";

import classes from "./SelectForm.module.css";
import Button from "../UI/Button";
import Select from "../UI/Select";
import MyContext from "../context/MyContextProvider";

const SelectForm = (props) => {
  const selectRef = useRef();

  const ctx = useContext(MyContext);

  const addMaterial = (event) => {
    event.preventDefault();
    props.setMat([...props.mats, selectRef.current.value]);
  };

  return (
    <form onSubmit={addMaterial} className={classes.form}>
      <Select label={props.label} ref={selectRef} items={ctx.materials} />
      <Button type="submit">Hozzávaló hozzáadása</Button>
    </form>
  );
};

export default SelectForm;
