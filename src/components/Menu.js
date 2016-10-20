import React from 'react';
import { Link } from 'react-router';

import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
    }

    render() {
        return (
            <div className="menu">
                <ul className="menu__list">
                    {/*<li className="menu__list-item">
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to="/">
                            Home
                        </Link>
                    </li>*/}
                    <li className="menu__list-item">
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to="/restaurants/kungsbron-8">
                            Kungsgatan 8
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to="/restaurants/regeringsgatan-26">
                            Regeringsgatan 26
                        </Link>
                    </li>
                    <li className="menu__list-item">
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to="/restaurants/avion-shopping">
                            Avion Shopping
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;
