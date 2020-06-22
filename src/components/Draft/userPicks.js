import React from "react";
import "./draft.css";

const UPicks = ({ user = {} }) => {
  // console.log("from Upick", user);
  // console.log("frim Upick", user.username);

  return (
    <div>
      <h1>{user.username}</h1>
      {/* <h2>Driver 1:{user.driver1.driver.name}</h2>
      <h2>Driver 2:{user.driver2.driver.name}</h2> */}
    </div>
  );
};
export default UPicks;
