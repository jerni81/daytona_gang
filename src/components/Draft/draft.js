import React from "react";

import DraftTime from "../Timer/draftCount";
import UPicks from "./userPicks";
import Field from "./field";
import "./draft.css";

const Draft = (props) => {
  // console.log(props);

  return (
    <div className="draft">
      <div className="sidebar">
        <DraftTime />
        <UPicks user={props.user} />
      </div>
      <Field drivers={props.drivers} />
    </div>
  );
};
export default Draft;
