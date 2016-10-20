/* global process */

import React from 'react';
import slug from 'slug';

import './Dish.css';

class Dish extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dish';
    }

    setImageState(state) {
        const { dish, city } = state;
        const nameSlug = slug(dish.name).toLowerCase();
        const citySlug = slug(city).toLowerCase();

        this.setState({
            logoUrl : `${process.env.PUBLIC_URL}/svg/${nameSlug}.svg`,
            imageUrl: `${process.env.PUBLIC_URL}/dishes/${nameSlug}-${citySlug}.png`
        });
    }

    componentWillMount() {
        this.setImageState(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.setImageState(newProps);
    }

    render() {
        const { dish } = this.props;
        const { logoUrl, imageUrl } = this.state;

        return (
            <div className="dish">
                <img className="dish__title" src={ logoUrl } alt={ dish.name } />

                <img
                    className="dish__image"
                    src={ imageUrl }
                    alt={ dish.name }
                />

                <p className="dish__description">
                    { dish.description.en }
                </p>

                <div className="dish__price">
                    { dish.price } { dish.currency }
                </div>
            </div>
        );
    }
}

Dish.propTypes = {
    dish: React.PropTypes.object,
    city: React.PropTypes.string
};

export default Dish;
