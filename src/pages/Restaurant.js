import React from 'react';

import Dishes from './../components/Dishes';

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
        const { restaurant } = this.state;

        return (
            <div>
                {restaurant ? (
                    <div className="restaurant">
                        <div className="restaurant__city">
                            { restaurant.address.city }
                        </div>

                        <h1 className="restaurant__name">
                            { restaurant.name }
                        </h1>

                        <div className="opening-hours">
                            <span className="opening-hours__days">Mon-Fri</span> <span className="opening-hours__period">{ restaurant.openingHours[0] }</span>
                            <span className="opening-hours__sep">|</span>
                            <span className="opening-hours__days">Sat</span> <span className="opening-hours__period">{ restaurant.openingHours[5] }</span>
                            <span className="opening-hours__sep">|</span>
                            <span className="opening-hours__days">Sun</span> <span className="opening-hours__period">{ restaurant.openingHours[6] }</span>
                        </div>

                        <Dishes dishes={ restaurant.menu } />
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
