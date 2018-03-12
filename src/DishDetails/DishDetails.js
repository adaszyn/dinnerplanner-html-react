import React, { Component } from "react";
import { ObserverComponent } from "../Observer/Observer";
import "./DishDetails.css";

export class DishDetails extends ObserverComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: props.model.getDishData(props.match.params.id).data,
      status: props.model.getDishData(props.match.params.id).status,
      numberOfGuests: props.model.getNumberOfGuests()
      // doesDishExistInMenu:
    };
  }
  update() {
    this.setState({});
  }
  renderIngredientsRow(ingredient, numberOfGuests) {
    var quantity = ingredient.quantity * numberOfGuests;
    return (
      <tr>
        <td>
          {ingredient.amount} {ingredient.unit}
        </td>
        <td>{ingredient.name}</td>
      </tr>
    );
  }
  renderIngredients() {
    const totalPrice = 1000;

    this.state.menuItem.extendedIngredients.map(ingredient =>
      renderIngredientsRow(ingredient, numberOfGuests)
    );

    var disabled = doesDishExistInMenu ? "disabled" : "";
    var button_text = doesDishExistInMenu ? "Already Added" : "Add To Cart";

    return (
      <table class="table">
        <tbody>
          ${ingredientCells}
          <tr>
            <td>
              <a href="#planner">
                <button
                  type="button"
                  class="ingredients-table__button btn btn-secondary btn-md"
                  disabled={doesDishExistInMenu()}
                  data-dish-id="${menuItem.id}"
                >
                  ${button_text}
                </button>
              </a>
            </td>
            <td />
            <td>SEK ${menuItem.pricePerServing}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    const { menuItem, numberOfGuests, doesDishExistInMenu } = this.state;
    return (
      <div className="main-view-container">
        <div id="dishView" class="dish-container">
          <div class="col-md-6 col-xs-12">
            <h1>${menuItem.title}</h1>
            <img class="dish-preview-img" src="${menuItem.image}" />

            <a href="#planner">
              <button type="button" class="dnp-btn btn btn-secondary btn-md">
                Back to search
              </button>
            </a>
            <h1>PREPARATION ${menuItem.preparationMinutes}</h1>
            <p>${menuItem.instructions}</p>
          </div>
          <div class="ingredients-table col-md-6 col-xs-12">
            <h3 class="ingredients-table__header">
              Ingredients for ${numberOfGuests} people
            </h3>
            {this.renderIngredients()}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetails;
