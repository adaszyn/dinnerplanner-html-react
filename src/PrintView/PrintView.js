import React from "react";
import { Link } from "react-router-dom";
import { ObserverComponent } from "../Observer/Observer"
import "./PrintView.css";

export class PrintView extends ObserverComponent {
  constructor(props) {
    super(props);
    this.state = this.getDerivedStateFromProps(props);
  }

  getDerivedStateFromProps(){
    return {
      menu: this.model.getMenu(),
      numberOfGuests: this.model.getNumberOfGuests()
    };
  }

  update() {
    this.setState(this.getDerivedStateFromProps());
  }

  renderPrintItemTemplate(item) {
    return (
      <div key={item.id} className="print-summary-item col-md-12">
        <div className="col-md-1"> </div>
        <div className="menu-item">
          <div className="print-summary-item__image col-md-1" style={{backgroundImage: `url(${item.image})`}}>
          </div>
        </div>
        <div className="print-summary__description col-md-4 col-xs-12">
          <h1>{item.title}</h1>
          <div className="print-summary__extra_details">
           </div>
        </div>
        <div className="print-summary__preparation col-md-4 col-xs-12">
          <h3>Preparation</h3>
          {item.instructions}
        </div>
      </div>
    );
  }

  render() {
    const { menu, numberOfGuests } = this.state;
    return (
      <div className="print-container">
        <div className="print-header">
          <div className="print-header-inner">
              <h3 className="print-summary-header-text">My Dinner:
                  <span className="num-of-guests">{numberOfGuests}</span>
              </h3>
              <Link to="/planner" className="print-header-back-button">
                  <button className="dnp-btn btn btn-secondary btn-md">Go back and edit dinner</button>
              </Link>
          </div>
        </div>
        <div className="print-summart">
          {menu.map(this.renderPrintItemTemplate)}
        </div>
      </div>
    )
  }
}

export default PrintView;
