import React from "react";
import BackDrop from "../BackDrop/BackDrop";

import "./modal.css";

const modal = props => {
  return (
    <>
      <BackDrop show={props.show} closeModal={props.closeModal} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
