import React, { useReducer } from "react";

import classes from "./CreateMaterial.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Materialreducer = (state, action) => {
  if (action.type === "MATERIAL") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 0,
    };
  }

  if(action.type === "MATERIAL_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 0
    }
  }

  return { value: "", isValid: false };
};

const CreateMaterial = () => {
  const [materialNameState, dispatchName] = useReducer(Materialreducer, {
    value: "",
    isValid: null,
  });

  const materialInputChanged = (event) => {
    dispatchName({ type: "MATERIAL", val: event.target.value });
  };

  const validateMaterialName = () => {
    dispatchName({ type: "MATERIAL_BLUR" });
  };

  const MaterialOnSubmit = (event) => {
    event.preventDefault();

    const material = {
      id: Math.random(),
      name: materialNameState.value,
    };

    const json = JSON.stringify(material);

    try {
      fetch("http://localhost:8000/materials/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className={classes.card}>
      <form
        onSubmit={MaterialOnSubmit}
        className={`${classes.form} ${!materialNameState.isValid && classes.invalid}`}
      >
        <Input
          label="Hozzávaló neve"
          type="text"
          value={materialNameState.value}
          onChange={materialInputChanged}
          onBlur={validateMaterialName}
        />
        <Button type="submit" className={classes.button}>
          Hozzáadás
        </Button>
      </form>
    </Card>
  );
};

export default CreateMaterial;
