// @flow
import React from "react";
import "./burger-ingredient.css";

// type Props = {
//   type: string
// };

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="bread-bottom" />;
      break;
    case "bread-top":
      ingredient = (
        <div className="bread-top">
          <div className="seeds1" />
          <div className="seeds2" />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="meat" />;
      break;
    case "cheese":
      ingredient = <div className="cheese" />;
      break;
    case "salad":
      ingredient = <div className="salad" />;
      break;
    case "bacon":
      ingredient = <div className="bacon" />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default burgerIngredient;
