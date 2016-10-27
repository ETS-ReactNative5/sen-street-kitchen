import React from 'react';

import Map from './../components/Map.js';
import OpeningHours from './../components/OpeningHours';
import Dishes from './../components/Dishes';

import foodora from './../assets/foodora.svg';
import restaurants from './../data/restaurants.json';
import './Restaurant.css';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Restaurant';
        this.state = {
            restaurant: null
        };
    }

    getNumberLink(number) {
        return 'tel:0046' + number.slice(1).replace(/ /g, '').replace(/-/g, '');
    }

    getRestaurant(slug) {
        const restaurant = restaurants.find(r => r.slug === slug);
        this.setState({ restaurant });
    }

    componentWillMount() {
        this.getRestaurant(this.props.params.address);
    }

    componentWillReceiveProps(nextProps) {
        this.getRestaurant(nextProps.params.address);
    }

    render() {
        const { locale } = this.props;
        const { restaurant } = this.state;
        const str = {
            cashlessRestaurant: locale === 'en' ? (
                    'Cashless Restaurant'
                ) : (
                    'Kontantlös restaurang'
                )
        };

        return (
            <div>
                {restaurant ? (
                    <div className="restaurant">
                        <div className="restaurant__city">
                            { restaurant.address.city }
                        </div>

                        <h1 className="restaurant__name">
                            { restaurant.foodora ? (
                                <span className="has-foodora">
                                    <span className="foodora-title">{ restaurant.name }</span>
                                    <a href={ restaurant.foodora }>
                                        <img
                                            className="foodora"
                                            src={ foodora }
                                            alt="Foodora"
                                        />
                                    </a>
                                </span>
                            ) : (
                                <span>{ restaurant.name }</span>
                            ) }

                        </h1>

                        <OpeningHours locale={ locale } openingHours={ restaurant.openingHours } />

                        <div className="restaurant__contact">
                            <span>{ str.cashlessRestaurant }</span>

                            <span>
                                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                    <path fill="#333333" d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
                                </svg>
                                <a href={`mailto:${ restaurant.email }`}>{ restaurant.email }</a>
                            </span>

                            <span>
                                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                    <path fill="#333333" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                </svg>
                                <a href={ this.getNumberLink(restaurant.phoneNumber) }>{ restaurant.phoneNumber }</a>
                            </span>
                        </div>

                        <Dishes locale={ locale } city={ restaurant.address.city } dishes={ restaurant.menu } />

                        <Map restaurant={ restaurant } />
                    </div>
                ) : null}
            </div>
        );
    }
}

Restaurant.propTypes = {
    params: React.PropTypes.object
};

export default Restaurant;
