import React from 'react';
import { Link } from 'react-router';

import TopBar from './TopBar';
import Menu from './Menu';

import background from './../assets/concrete.jpg';
import sen1 from './../assets/sen1.jpg';
import sen2 from './../assets/sen2.jpg';
import sen3 from './../assets/sen3.jpg';
import logo from './../assets/logo.svg';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }

    render() {
        const { params } = this.props;

        let bgr;
        switch(params.address) {
        case 'avion-shopping':
            bgr = sen1;
            break;
        case 'kungsbron-8':
            bgr = sen2;
            break;
        case 'regeringsgatan-26':
            bgr = sen3;
            break;
        default:
            bgr = background;
            break;
        }

        return (
            <div>
                <TopBar {...this.props} />
                <div style={{ backgroundImage: `url(${bgr})` }} className="header">

                    <Link to="/">
                        <img className="logo" src={ logo } alt="SEN Street Kitchen" />
                    </Link>

                <Menu {...this.props} />
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
