import React from "react";

const Grid = (props) => {
  console.log(props.drivers);
  return (
    <div>
      <h1>Grid</h1>
      {props.drivers.map((driver, i) => (
        <div key={i + 1}>
          {i + 1}) {driver.name} #{driver.number}
        </div>
      ))}
    </div>
  );
};

export default Grid;
