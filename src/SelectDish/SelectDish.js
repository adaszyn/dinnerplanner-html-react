import React, { Component } from "react";
import "./SelectDish.css";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import SearchBar from "../SeachBar/SearchBar";
import { ObserverComponent } from "../Observer/Observer";
import { DATA_STATUS } from "../data/DinnerModel";
import {Link} from 'react-router-dom';
import { Loader } from "../Loader";
import { ErrorModal } from "../ErrorModal";

const {FAILED, FINISHED, LOADING} = DATA_STATUS;

class SelectDish extends ObserverComponent {
  constructor() {
    super();
    this.state = {
      dishes: [],
      status: DATA_STATUS.FINISHED
    };
  }
  onSubmit = (searchPhrase, category) => {
    this.props.model.searchDishes(searchPhrase, category);
  };
  update() {
    const { status, data } = this.props.model.getSearchResults();
    this.setState({
      dishes: data,
      status
    });
  }
  renderDish = (item) => {
      return <Link key={`dish-item-${item.id}`} to={`/dish/${item.id}`} className="menu-item-container">
      <div className="menu-item">
        <div className="menu-item__image" style={{backgroundImage: `url(${item.image})`}}>
            <h3 className="menu-item__label">{item.title}</h3>
        </div>
      </div>
  </Link>
  }
  render() {
    return (
    <div className="main-view-container">      
      <div id="plannerView">
        <div id="menuView" className="menu-container">
          <SearchBar onSubmit={this.onSubmit} />
          <div className="search-view" id="menu-container" >
            {this.state.status === LOADING && <Loader />}
            {this.state.status === FINISHED && this.state.dishes.map(this.renderDish)}
            {this.state.status === FAILED && <ErrorModal />}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SelectDish;
