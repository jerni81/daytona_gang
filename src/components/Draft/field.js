import React from "react";
import "./draft.css";

const Field = (props) => {
  return (
    <div>
      <h1>Field</h1>
      <div className="grid">
        {props.drivers.map((driver, i) => (
          <div key={i + 1} className="item">
            {i + 1}) {driver.name} #{driver.number}
            <button>Pick</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Field;
