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
                <Link to="/restaurants">Restaurants</Link>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;
