import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => (
    <li key={`${igKey}-${i}`}>
      <span style={{textTransform: "capitalize"}}>{igKey}</span>:{" "}
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Auxiliary>
      <h1>Your Order</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <h2>Total Price: ${props.purchasePrice.toFixed(2)}</h2>
      <p>Continue to Chekout?</p>

      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
}

export default OrderSummary;
