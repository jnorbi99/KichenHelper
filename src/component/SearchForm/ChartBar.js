import React, { useEffect, useState } from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillWidth = "0%";

  const [materials, setMaterials] = useState("");

  if (props.maxValue > 0) {
    barFillWidth = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  useEffect(() => {
    props.mats.map((item) => setMaterials(materials + item + ","));
  }, [props]);

  return (
    <div className="container">
      <div className="chart-bar row">
        <div className="chahrt-bar__label col-4">{props.label}</div>
        <div className="chahrt-bar__label col-2">
          {props.value + "/" + props.maxValue}
        </div>
        <div className="chart-bar__inner col-6">
          <div
            className="chart-bar__fill"
            style={{ width: barFillWidth }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
