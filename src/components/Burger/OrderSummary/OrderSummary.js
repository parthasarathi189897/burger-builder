import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => (
    <li key={ingKey}>
      <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:
      {props.ingredients[ingKey]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <Button buttonType="danger" clicked={props.purchaseChancel}>
        CANCEL
      </Button>
      <Button buttonType="success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
