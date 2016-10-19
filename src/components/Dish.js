/* global process */

import React from 'react';
import slug from 'slug';
import ReactSpinner from 'react-spinjs';

import './Dish.css';

class Dish extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dish';

        const { dish } = this.props;
        const nameSlug = slug(dish.name).toLowerCase();

        this.state = {
            dishLoaded  : false,
            dishLogoUrl : `${process.env.PUBLIC_URL}/svg/${nameSlug}.svg`,
            dishImageUrl: `${process.env.PUBLIC_URL}/dishes/${nameSlug}.png`
        };
    }

    handleImageLoad() {
        this.setState({ dishLoaded: true });
    }

    handleImageError() {
        this.setState({
            dishImageUrl: `${process.env.PUBLIC_URL}/dishes/placeholder.png`
        });
    }

    render() {
        const { dish } = this.props;
        const { dishLoaded, dishLogoUrl, dishImageUrl } = this.state;

        return (
            <div className="dish">
                <img className="dish__title" src={ dishLogoUrl } alt={ dish.name } />
                { dishLoaded ? (
                    <img
                        className="dish__image"
                        src={ dishImageUrl }
                        alt={ dish.name }
                    />
                ) : (
                    <div style={{ position: 'relative', minHeight: '219px', width: '100%'  }}>
                        <ReactSpinner color="#999" />
                        <img
                            style={{ display: 'none' }}
                            src={ dishImageUrl }
                            alt={ dish.name }
                            onLoad={ () => this.handleImageLoad() }
                            onError={ () => this.handleImageError() }
                        />
                    </div>
                ) }
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
