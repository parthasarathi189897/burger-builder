import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./burger.css";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, igCount) => (
        <BurgerIngredient type={ingredient} key={ingredient + igCount} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" key="bread-top" />
      {transformedIngredients.length !== 0 ? (
        transformedIngredients
      ) : (
        <p>Please add some Ingredients !!!</p>
      )}
      <BurgerIngredient type="bread-bottom" key="bread-bottom" />
    </div>
  );
};

export default burger;
