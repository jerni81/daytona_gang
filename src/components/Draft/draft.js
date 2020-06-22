import React from "react";

import DraftTime from "../Timer/draftCount";
import UPicks from "./userPicks";
import Field from "./field";
import "./draft.css";

const Draft = (props) => {
  // console.log("from draft", user);

  return (
    <div className="draft">
      <div className="sidebar">
        <DraftTime />
        <UPicks user={props.user}/>  
      </div>
      <Field drivers={props.drivers} authUser={props.authUser}/>
    </div>
  );
};
export default Draft;
