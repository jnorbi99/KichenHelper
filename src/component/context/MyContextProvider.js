import React, { createContext, useState } from "react";

import materialData from "../data/materials.json";
import foodData from "../data/db.json";

const MyContext = createContext({
  materials: [],
  foods: [],
});

export const MyContextProvider = (props) => {
  const [allFood] = useState(foodData.foods);
  const [allMaterials] = useState(materialData.materials);

  return (
    <MyContext.Provider
      value={{
        materials: allMaterials,
        foods: allFood,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
