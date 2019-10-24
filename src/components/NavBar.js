import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul className="nav-list">
                     <li className="nav-list__item nav-list__item--active">
                        <Link to="/" className="nav-list__link">
                        Home
                        </Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/GettingStarted" className="nav-list__link">
                        Getting Started
                        </Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/CommandTips" className="nav-list__link">
                         Command Tips
                        </Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/Jobs" className="nav-list__link">
                        Jobs
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(NavBar);