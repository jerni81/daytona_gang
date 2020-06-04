import React from "react";

import DraftTime from "../Timer/draftCount";
import UPicks from "./userPicks";
import Field from "./field";
import "./draft.css";

const Draft = (props) => (
  <div className="draft">
    <div className="sidebar">
      <DraftTime />
      <UPicks />
    </div>
    <Field drivers={props.drivers} />
  </div>
);

export default Draft;
