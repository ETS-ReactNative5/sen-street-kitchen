/* global process */

import React from 'react';
import slug from 'slug';

import './Dish.css';

class Dish extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dish';
    }

    render() {
        const { dish } = this.props;

        const imageUrl = `${process.env.PUBLIC_URL}/${slug(dish.name).toLowerCase()}.svg`;

        return (
            <div className="dish">
                <img className="dish__image" src={ imageUrl } alt={ dish.name }/>
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
    dish: React.PropTypes.object
};

export default Dish;
