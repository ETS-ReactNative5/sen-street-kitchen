import React from 'react';
import TopBar from './TopBar';
import Menu from './Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }

    render() {
        return (
            <div>
                <TopBar />
                Header
                <Menu />
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
