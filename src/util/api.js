import axios from "axios";

const API_BASE = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/";

const api = function(url, params) {
  return axios(`${API_BASE}${url}`, {
    params,
    headers: {
      "X-Mashape-Key": "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"
    }
  });
};

export default api;
