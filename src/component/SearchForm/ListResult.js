import React from "react";

import classes from "./ListResult.module.css";
import ChartBar from "./ChartBar";

const ListResult = (props) => {
  return (
    <div>
      <div className={classes.chart}>
        {props.foods.map((food) => (
          <ChartBar
            key={food.name}
            value={food.eq}
            maxValue={food.max}
            label={food.name}
            mats={food.mats}
          />
        ))}
      </div>
    </div>
  );
};

export default ListResult;
