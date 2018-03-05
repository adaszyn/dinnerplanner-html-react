import React, { Component, Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    return (
        <Fragment>
        <div class="page-header dnp-header">
            <h1 class="dnp-header__text">Dinner planner</h1>
        </div>
          <Route exact path="/" component={Welcome}/>
            <Route path="/planner" render={() => <Sidebar model={modelInstance}/>}/>
          <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
        </Fragment>
    );
  }
}

export default App;
