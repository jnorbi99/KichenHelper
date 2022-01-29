import React from "react";

const Select = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <select ref={ref}>
        {props.items.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
});

export default Select;
