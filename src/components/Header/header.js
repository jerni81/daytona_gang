import React from "react";
// import "./header.css";
import TonaCount from "../Timer/daytonaCount";

const Header = () => (
  <div className="header">
    <h1>Daytona Gang Race Pool!!!</h1>
    <div className="tonaClock">
      <h4>Countdown to Daytona 500!!!</h4>
      <TonaCount />
    </div>
    {/* <div>
      <h4>Welcome</h4>
    </div> */}
  </div>
);

export default Header;
