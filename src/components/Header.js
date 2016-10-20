import React from 'react';
import { Link } from 'react-router';

import TopBar from './TopBar';
import Menu from './Menu';

import background from './../assets/concrete.jpg';
import logo from './../assets/logo.svg';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }

    render() {
        return (
            <div>
                <TopBar />
                <div style={{ background: `url(${background})` }} className="header">

                    <Link to="/">
                        <img className="logo" src={ logo } alt="SEN Street Kitchen" />
                    </Link>

                <Menu />
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
