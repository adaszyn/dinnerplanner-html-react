import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
        <div id="introView">
            <div className="intro-container">
                <div class="col-md-3 col-xs-1"/>
                <div class="col-md-6 col-xs-10">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Velit egestas dui id ornare arcu odio ut sem nulla. Id aliquet lectus proin nibh nisl condimentum id
                        venenatis a. Vitae semper quis lectus nulla at volutpat diam ut. Imperdiet sed euismod nisi porta lorem
                        mollis. Mattis nunc sed blandit libero volutpat. Senectus et netus et malesuada fames ac turpis egestas.
                        Facilisi etiam dignissim diam quis enim. Turpis egestas pretium aenean pharetra magna ac. Ullamcorper
                        morbi tincidunt ornare massa eget egestas purus. Vitae et leo duis ut diam.
                    </div>
                    <Link to="/planner">
                        <button type="button" id="create-new-dinner-button" class="dnp-btn btn btn-primary btn-lg">Create New Dinner</button>
                    </Link>
                </div>
                <div className="col-md-3 col-xs-1"/>
            </div>
        </div>
    );
  }
}

export default Welcome;
