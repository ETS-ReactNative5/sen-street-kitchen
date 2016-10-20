import React from 'react';

import Map from './../components/Map.js';
import OpeningHours from './../components/OpeningHours';
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

                        <OpeningHours openingHours={ restaurant.openingHours } />

                        <Dishes city={ restaurant.address.city } dishes={ restaurant.menu } />

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
