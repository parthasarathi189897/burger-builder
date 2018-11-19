import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./burger.css";

const burger = props => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
