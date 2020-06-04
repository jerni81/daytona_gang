import React from "react";
import "./grid.css";

const Grid = (props) => {
  return (
    <div>
      <h1>Grid</h1>
      <div className="grid">
        {props.drivers.map((driver, i) => (
          <div key={i + 1} className="item">
            {i + 1}) {driver.name} #{driver.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
