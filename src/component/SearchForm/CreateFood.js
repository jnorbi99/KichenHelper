import React, { useState, useContext } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ListMaterials from "../AddFood/ListMaterials";
import classes from "./CreateFood.module.css";
import ListResult from "./ListResult";
import SelectForm from "./SelectForm";
import MyContext from "../context/MyContextProvider";

const CreateFood = () => {
  const [materials, setMaterials] = useState([]);
  const [resultFood, setResultFood] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const ctx = useContext(MyContext);

  //Get allfood
  /*useEffect(() => {
    fetch("http://localhost:8000/foods/")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setAllFood(result);
      });
  }, []);*/

  const searchForFood = () => {
    let foodList = [];
    let matList = [];

    for (const f of ctx.foods) {
      let equal = 0;
      for (const m of materials) {
        if (f.materials.includes(m)) {
          equal++;
          matList = [...matList, m];
        }
      }

      let searchedFood = {
        name: f.name,
        max: f.materials.length,
        eq: equal,
        rate: equal / f.materials.length,
        mats: matList,
      };
      foodList = [...foodList, searchedFood];
    }
    foodList.sort((a, b) => b.rate - a.rate);
    setSubmitted(true);
    setResultFood(foodList);
  };

  return (
    <Card className={classes.card}>
      <SelectForm label="Hozzávalók" setMat={setMaterials} mats={materials} />
      <ListMaterials
        className={classes.listMaterials}
        materialList={materials}
        setNewList={setMaterials}
      />
      <Button type="submit" className={classes.button} onClick={searchForFood}>
        Keresés
      </Button>
      {submitted && <ListResult foods={resultFood} />}
    </Card>
  );
};

export default CreateFood;
