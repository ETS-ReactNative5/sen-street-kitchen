import React from 'react';

import restaurants from './../data/restaurants';

import './TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TopBar';
    }

    render() {
        const today = new Date().getDay();

        return (
            <div className="topbar">
                <div className="topbar__title">Opening Hours Today</div>

                { restaurants.map(restaurant => (
                    <div className="topbar__restaurant" key={ restaurant.slug }>
                        <span className="topbar__name">
                            { restaurant.name }
                        </span>

                        <span className="topbar__hours">
                            { restaurant.openingHours[today - 1] }
                        </span>
                    </div>
                )) }
            </div>
        );
    }
}

TopBar.propTypes = {};

export default TopBar;
