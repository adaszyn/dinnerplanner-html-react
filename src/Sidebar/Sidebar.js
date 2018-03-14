import React from "react";
import { ObserverComponent } from "../Observer/Observer";
import "./Sidebar.css";
import { formatPrice } from "../util/number";
class Sidebar extends ObserverComponent {
  constructor(props) {
    super(props);
    this.state = this.getDerivedStateFromProps(props);
  }
  getDerivedStateFromProps(props) {
    return {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu(),
      totalPrice: this.props.model.getTotalMenuPrice()
    };
  }
  update() {
    this.setState(this.getDerivedStateFromProps(this.props));
  }
  renderTableRow(dish) {
    return (
      <tr className="dish-row" key={`dish-row-${dish.id}`}>
        <td>{dish.title}</td>
        <td>{formatPrice(dish.pricePerServing)} SEK</td>
      </tr>
    );
  }
  onGuestsNumberChange = ({ target: { value } }) => {
    this.model.setNumberOfGuests(parseInt(value, 10));
  };

  render() {
    return (
      <div id="sidebarView" className="sidebar">
        <h3 className="sidebar-header"> My Dinner </h3>

        <div className="margin-left-10 margin-bottom-10 margin-top-10">
          <div className="sidebar-dropdown">
            People
            <select
              className="sidebar-dropdown__select"
              id="num-of-guests___select"
              onChange={this.onGuestsNumberChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <table className="table selected-dishes-table table-striped">
          <thead>
            <tr>
              <th>Dish Name </th>
              <th> Cost </th>
            </tr>
          </thead>
          <tbody>{this.state.menu.map(this.renderTableRow)}</tbody>
        </table>
        <div id="sidebar-total-price">
          {formatPrice(this.state.totalPrice)} SEK
        </div>
        <div className="col-md-3 col-xs-2"> </div>
        <a
          href="#confirm"
          id="confirm-dinner-btn___a"
          className="col-md-6 col-xs-8"
        >
          <button
            type="button"
            id="confirm-dinner-btn"
            className="dnp-btn btn btn-secondary"
          >
            Confirm dinner
          </button>
        </a>
        <div className="col-md-3 col-xs-2"> </div>
      </div>
    );
  }
}

export default Sidebar;
