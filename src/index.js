import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {MyContextProvider} from "./component/context/MyContextProvider";

ReactDOM.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById("root")
);
