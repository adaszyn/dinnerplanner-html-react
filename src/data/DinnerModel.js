import api from "../util/api";

export const DATA_STATUS = {
  FINISHED: "FINISHED",
  LOADING: "LOADING",
  FAILED: "FAILED"
};
const httpOptions = {
  headers: {
    "X-Mashape-Key": "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"
  }
};

const DinnerModel = function() {
  let numberOfGuests = 4;
  let observers = [];
  const searchResults = {
    data: [],
    status: DATA_STATUS.FINISHED
  };

  this.getSearchResults = () => searchResults;
  this.setSearchResults = (data, status) => {
    searchResults.data = data;
    searchResults.status = status;
    notifyObservers();    
  };

  this.setNumberOfGuests = function(num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function() {
    return numberOfGuests;
    
  };

  // API Calls

  this.getAllDishes = function() {
    const url =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError);
  };

  this.searchDishes = (query, type) => {
    this.setSearchResults([], DATA_STATUS.LOADING);
    return api(`recipes/searchComplex`, {
      query,
      type
    })
    .then(({data}) => {
        this.setSearchResults(data.results, DATA_STATUS.FINISHED);        
    })
    .catch(error => {
        console.error(error);
        this.setSearchResults([], DATA_STATUS.FAILED);                
    })
  };

  // API Helper methods

  const processResponse = function(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  };

  const handleError = function(error) {
    if (error.json) {
      error.json().then(error => {
        console.error("getAllDishes() API Error:", error.message || error);
      });
    } else {
      console.error("getAllDishes() API Error:", error.message || error);
    }
  };

  // Observer pattern

  this.addObserver = function(observer) {
    observers.push(observer);
  };

  this.removeObserver = function(observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function() {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
