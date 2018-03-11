import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./SearchBar.css";

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchPhrase: "",
      category: "all"
    };
  }
  onInputChange = ({ target: { value } }) => {
    this.setState({
      searchPhrase: value
    });
  };
  onCategoryChange = ({ target: { value } }) => {
    this.setState({
      category: value
    });
  };
  render() {
    return (
      <div id="search-view">
        <span className="h3">Find a dish</span>
        <div className="search-view-controls">
          <input
            type="text"
            value={this.state.searchPhrase}
            onChange={this.onInputChange}
            id="search-view___input"
            placeholder="Enter keywords"
          />
          <select onChange={this.onCategoryChange} id="search-view___select">
            <option value="all">All</option>
            <option value="main course">Main Course</option>
            <option value="side dish">Side dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="salad">Salad</option>
            <option value="bread">Bread</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="beverage">Beverage</option>
            <option value="sauce">Sauce</option>
            <option value="drink">drink</option>
          </select>
          <button
            onClick={() => this.props.onSubmit(this.state.searchPhrase, this.state.category)}
            id="search___btn-dinner"
            type="button"
            className="btn btn-secondary btn-md"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}

export default SearchBar;
