import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
    }

    render() {
        return (
            <div>
                Menu
                <Link to="/about-us">About Us</Link>
                <Link to="/restaurants/kungsbron-8">kungsgatan-8</Link>
                <Link to="/restaurants/regeringsgatan-26">regeringsgatan-26</Link>
                <Link to="/restaurants/avion-shopping">avion-shopping</Link>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;
