import React from "react";

import "./back-drop.css";

const backDrop = props =>
  props.show ? <div className="back-drop" onClick={props.closeModal} /> : null;

export default backDrop;
