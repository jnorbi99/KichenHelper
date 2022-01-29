import React, { useReducer, useState } from "react";

import Input from "../UI/Input";
import SelectForm from "../SearchForm/SelectForm";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddFood.module.css";
import ListMaterials from "./ListMaterials";

const foodNameReducer = (state, action) => {
  if (action.type === "NAME") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 0,
    };
  }

  if (action.type === "NAME_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 0,
    };
  }

  return { value: "", isValid: false };
};

const AddFood = () => {
  const [foodState, dispatchFood] = useReducer(foodNameReducer, {
    value: "",
    isValid: null,
  });

  const [materialList, setMaterialList] = useState([]);

  const SetFoodNameFunc = (event) => {
    dispatchFood({
      type: "NAME",
      val: event.target.value,
    });
  };

  const nameValidationHandler = () => {
    dispatchFood({ type: "NAME_BLUR" });
  };

  const SaveFood = () => {
    if (!foodState.isValid) {
      return;
    }

    if (materialList.length === 0) {
      return;
    }

    const aFood = {
      id: Math.random(),
      name: foodState.value,
      materials: materialList,
    };

    const json = JSON.stringify(aFood);

    try {
      fetch("http://localhost:8000/foods/", {
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
    <Card
      className={`${classes.card} ${!foodState.isValid && classes.invalid}`}
    >
      <Input
        type="text"
        id="name"
        label="Az étel neve"
        value={foodState.value}
        onChange={SetFoodNameFunc}
        onBlur={nameValidationHandler}
      />
      <SelectForm
        label="Hozzávalók"
        setMat={setMaterialList}
        mats={materialList}
      />
      <ListMaterials
        className={classes.listMaterials}
        materialList={materialList}
        setNewList={setMaterialList}
      />
      <Button type="submit" className={classes.button} onClick={SaveFood}>
        Hozzáadás
      </Button>
    </Card>
  );
};

export default AddFood;
