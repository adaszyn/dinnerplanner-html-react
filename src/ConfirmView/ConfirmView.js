import React from "react";
import { Link } from "react-router-dom";
import { ObserverComponent } from "../Observer/Observer";
import "./ConfirmView.css";
import { formatPrice } from "../util/number";

export class ConfirmView extends ObserverComponent {
  constructor(props) {
    super(props);
    this.state = this.getDerivedStateFromProps();
  }
  getDerivedStateFromProps = () => {
    return {
      menu: this.model.getMenu(),
      totalPrice: this.model.getTotalMenuPrice()
    };
  }
  update() {
    this.setState(this.getDerivedStateFromProps());
  }
  renderDishItemTemplate(dish) {
    return (
      <div key={dish.id} className="cart-summary-item-container">
        <div
          className="cart-summary-item-container__border"
          style={{backgroundImage: `url(${dish.image})`}}
        >
          <h3 className="cart-summary-item-container__label">{dish.title}</h3>
        </div>
        <b className="cart-summary-item-price">{formatPrice(dish.pricePerServing)}</b>
      </div>
    );
  }
  render() {
    return (
      <div id="confirmView" className="confirm-container col-md-12">
        <div className="confirm-header">
          <div className="confirmation-header">
            <h3 className="confirmation-header-text">
              My Dinner:
              <span id="num-of-guests" />
            </h3>
            <Link to="/planner" className="confirmation-header-back-button">
              <button className="dnp-btn btn btn-secondary btn-md">
                Go back and edit dinner
              </button>
            </Link>
          </div>
        </div>
        <div className="cart-summary">
          <div
            className="cart-summary__sidebar col-md-3 hidden-xs"
            id="total-price___container"
          />

          <div className="cart-summary__items" id="menu-container___div">
            {this.state.menu.map(this.renderDishItemTemplate)}
          </div>
          <div
            className="cart-summary__price-container cart-summary__sidebar col-md-3 hidden-xs"
            id="total-price___container"
          >
            Total:
            <br />
            <span className="cart-summary__price-value" id="total-price___span">
              {" "}
              {formatPrice(this.state.totalPrice)} SEK
            </span>
          </div>
        </div>
        <div className="confirmation-footer" id="print-btn___container">
          <Link to="/print">
            <button type="button" className="dnp-btn btn btn-secondary">
              Print recipe
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default ConfirmView;