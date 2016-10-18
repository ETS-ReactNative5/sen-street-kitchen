import React from 'react';
import TopBar from './TopBar';
import Menu from './Menu';

import background from './../assets/concrete.jpg';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }

    render() {
        return (
            <div style={{ background: `url(${background})` }} className="header">
                <TopBar />
                Header
                <Menu />
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
