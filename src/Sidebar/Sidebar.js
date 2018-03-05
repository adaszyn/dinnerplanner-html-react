import React, { Component } from 'react';
import './Sidebar.css';
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }N

  render() {
    return (
        <div id="sidebarView" className="sidebar">
            <h3 className="sidebar-header"> My Dinner </h3>

            <div className="margin-left-10 margin-bottom-10 margin-top-10">
                <div className="sidebar-dropdown">
                    People
                    <select className="sidebar-dropdown__select" id="num-of-guests___select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <table className="table selected-dishes-table table-striped">
                <tbody>
                <thead>
                <tr>
                    <th>Dish Name </th>
                    <th> Cost </th>
                </tr>
                </thead>
                </tbody>
            </table>
            <div id="sidebar-total-price">
                0 SEK
            </div>
            <div className="col-md-3 col-xs-2"> </div>
            <a href="#confirm" id="confirm-dinner-btn___a" className="col-md-6 col-xs-8">
                <button type="button" id="confirm-dinner-btn" className="dnp-btn btn btn-secondary">Confirm dinner</button>
            </a>
            <div className="col-md-3 col-xs-2"> </div>
        </div>
    );
  }
}

export default Sidebar;
