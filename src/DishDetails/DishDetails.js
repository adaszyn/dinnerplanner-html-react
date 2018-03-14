import React from "react";
import { Link } from "react-router-dom";
import { ObserverComponent } from "../Observer/Observer";
import { DATA_STATUS } from "../data/DinnerModel";
import { Loader } from "../Loader";
import "./DishDetails.css";

const getDishIdFromProps = props => props.match.params.id;

export class DishDetails extends ObserverComponent {
  constructor(props) {
    super(props);
    this.state = this.getDerivedStateFromProps(props);
  }
  getDerivedStateFromProps(props = this.props) {
    return {
      menuItem: props.model.getDishData(getDishIdFromProps(props)).data,
      status: props.model.getDishData(getDishIdFromProps(props)).status,
      numberOfGuests: props.model.getNumberOfGuests(),
      doesDishExistInMenu: props.model.doesDishExistInMenu(
        getDishIdFromProps(props)
      )
    };
  }
  update() {
    this.setState(this.getDerivedStateFromProps());
  }
  renderIngredientsRow = ingredient => {
    return (
      <tr key={`ingredient-row-${ingredient.name}`}>
        <td>
          {ingredient.amount} {ingredient.unit}
        </td>
        <td>{ingredient.name}</td>
      </tr>
    );
  };
  handleAddToCarClick = () => {
    this.props.model.addDishToMenu(this.state.menuItem);
  };
  componentDidMount() {
    super.componentDidMount();
    this.props.model.getDish(getDishIdFromProps(this.props));
  }
  renderIngredients() {
    if (!this.state.menuItem.extendedIngredients) {
      return <Loader />;
    }
    this.state.menuItem.extendedIngredients.map(ingredient =>
      this.renderIngredientsRow(ingredient)
    );

    var buttonText = this.state.doesDishExistInMenu
      ? "Already Added"
      : "Add To Cart";

    return (
      <table className="table">
        <tbody>
          {this.state.menuItem.extendedIngredients.map(
            this.renderIngredientsRow
          )}
          <tr>
            <td>
              <a href="#planner">
                <button
                  onClick={this.handleAddToCarClick}
                  type="button"
                  className="ingredients-table__button btn btn-secondary btn-md"
                  disabled={this.state.doesDishExistInMenu}
                  data-dish-id={this.state.menuItem.id}
                >
                  {buttonText}
                </button>
              </a>
            </td>
            <td />
            <td>SEK {this.state.menuItem.pricePerServing}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    const { menuItem, numberOfGuests } = this.state;
    if (this.state.status === DATA_STATUS.LOADING) {
      return <Loader />;
    }
    return (
      <div className="main-view-container">
        <div id="dishView" className="dish-container">
          <div className="col-md-6 col-xs-12">
            <h1>{menuItem.title}</h1>
            <img alt={`dish-${menuItem.name}`} className="dish-preview-img" src={menuItem.image} />

            <Link to="/planner">
              <button
                type="button"
                className="dnp-btn btn btn-secondary btn-md"
              >
                Back to search
              </button>
            </Link>
            <h1>PREPARATION {menuItem.preparationMinutes}</h1>
            <p>{menuItem.instructions}</p>
          </div>
          <div className="ingredients-table col-md-6 col-xs-12">
            <h3 className="ingredients-table__header">
              Ingredients for {numberOfGuests} people
            </h3>
            {this.renderIngredients()}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetails;
