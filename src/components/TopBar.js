import React from 'react';

import restaurants from './../data/restaurants';

import './TopBar.css';

import gb from './../assets/gb.svg';
import se from './../assets/se.svg';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TopBar';
    }

    render() {
        const today = new Date().getDay();

        const { locale, setLocaleToSwedish, setLocaleToEnglish } = this.props;

        return (
            <div className="topbar">
                { locale === 'en' ? (
                    <div className="topbar__title">Opening Hours Today</div>
                ) : (
                    <div className="topbar__title">Öppettider i dag</div>
                ) }

                { restaurants.map(restaurant => (
                    <div className="topbar__restaurant" key={ restaurant.slug }>
                        <span className="topbar__name">
                            { restaurant.name }
                        </span>

                        <span className="topbar__hours">
                            { restaurant.openingHours[today] }
                        </span>
                    </div>
                )) }

                { locale === 'en' ? (
                    <img onClick={ this.props.setLocaleToSwedish.bind(this) }className="flag" src={ se } alt="Svenska"/>
                ) : (
                    <img onClick={ this.props.setLocaleToEnglish.bind(this) } className="flag" src={ gb } alt="English"/>
                ) }
            </div>
        );
    }
}

TopBar.propTypes = {};

export default TopBar;
