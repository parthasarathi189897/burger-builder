import React from "react";
import "./build-control.css";

const buildControl = props => (
  <div className="build-control">
    <div className="label">{props.label}</div>
    <button
      className="less"
      disabled={props.isDisabled}
      onClick={() => props.removeIngredient(props.type)}
    >
      Less
    </button>
    <button className="more" onClick={() => props.addIngredient(props.type)}>
      More
    </button>
  </div>
);

export default buildControl;
