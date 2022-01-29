import React, { useEffect, useState } from "react";
import "./App.css";
import AddFood from "./component/AddFood/AddFood";
import CreateMaterial from "./component/AddMaterial/CreateMaterial";
import MainHeader from "./component/MainHeader/MainHeader";
import CreateFood from "./component/SearchForm/CreateFood";

function App() {
  const [isAdd, setIsAdd] = useState("Add");

  return (
    <React.Fragment>
      <MainHeader setAdd={setIsAdd} />
      <main>
        {isAdd === "Add" && <AddFood />}
        {isAdd === "Create" && <CreateFood />}
        {isAdd === "Material" && <CreateMaterial />}
      </main>
    </React.Fragment>
  );
}

export default App;
