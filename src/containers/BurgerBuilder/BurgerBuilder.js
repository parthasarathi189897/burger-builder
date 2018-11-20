import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.6,
  meat: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 0,
    isPurchasable: false,
    purchasing: false
  };
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  updatePurchasable(newIngredients) {
    // const newIngredients = {
    //   ...this.state.ingredients
    // };
    const sum = Object.keys(newIngredients)
      .map(ingKey => newIngredients[ingKey])
      .reduce((prevIng, curIng) => prevIng + curIng, 0);
    this.setState({
      isPurchasable: sum > 0
    });
  }
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const upDatedCount = oldCount + 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENTS_PRICE[type];
    const upgradedIngredients = {
      ...this.state.ingredients,
      [type]: upDatedCount
    };
    this.setState({
      ingredients: upgradedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchasable(upgradedIngredients);
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const upDatedCount = oldCount - 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENTS_PRICE[type];
    const upgradedIngredients = {
      ...this.state.ingredients,
      [type]: upDatedCount
    };
    this.setState({
      ingredients: upgradedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchasable(upgradedIngredients);
  };
  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };
  purchaseContinueHandler = () => {
    alert();
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseChancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          disabledInfo={disabledInfo}
          isPurchasable={this.state.isPurchasable}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
