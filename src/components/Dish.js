/* global process */

import React from 'react';
import slug from './../helpers/slug';

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

    getPrice(dish) {
        const citySlug = slug(this.props.city).toLowerCase();
        if (citySlug === 'stockholm') {
            return dish.price.stockholm;
        } else {
            return dish.price.umea;
        }
    }

    render() {
        const { dish, locale } = this.props;
        const { logoUrl, imageUrl } = this.state;

        return (
            <div className="dish">
                <img className="dish__title hide-mobile" src={ logoUrl } alt={ dish.name } />

                <div className="dish__container">
                    <img
                        className="dish__image"
                        src={ imageUrl }
                        alt={ dish.name }
                    />

                    <div className="dish__container__col">
                        <img className="dish__title hide-desktop" src={ logoUrl } alt={ dish.name } />

                        <p className="dish__description">
                            { locale === 'en' ? dish.description.en : dish.description.sv }
                        </p>

                        <div className="dish__price">
                            { this.getPrice(dish) } { dish.currency }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dish.propTypes = {
    dish: React.PropTypes.object,
    city: React.PropTypes.string,
    locale: React.PropTypes.string
};

export default Dish;
