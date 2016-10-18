import React from 'react';

import Dishes from './../components/Dishes';

import restaurants from './../data/restaurants.json';

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
                    <div>
                        <h1>{ restaurant.name }</h1>

                        { restaurant.address.street }<br/>
                        { restaurant.address.zipCode } { restaurant.address.city }<br/>
                        { restaurant.address.city }, { restaurant.address.country }

                        <hr/>
                        foodora? { restaurant.foodora ? 'yes' : 'no' }<br/>
                        cashless? { restaurant.cashless ? 'yes' : 'no' }

                        <hr />

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
