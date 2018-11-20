import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import "./build-controls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className="build-controls">
      <p>
        Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          type={ctrl.type}
          isDisabled={props.disabledInfo[ctrl.type]}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
        />
      ))}
      <button
        disabled={!props.isPurchasable}
        className="order-button"
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
