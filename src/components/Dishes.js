import React from 'react';
import Dish from './Dish';
import dishes from './../data/dishes.json';

import './Dishes.css';

class Dishes extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dishes';
    }

    getDish(id) {
        return dishes.find(dish => dish.id === id);
    }

    render() {
        const { dishes, city, locale } = this.props;

        return (
            <div className="dishes">
                { dishes.map(id => {
                    const dish = this.getDish(id);

                    return (
                        <Dish locale={ locale } key={ dish.id } city={ city } dish={ dish } />
                    );
                }) }
            </div>
        );
    }
}

Dishes.propTypes = {
    dishes: React.PropTypes.array,
    city  : React.PropTypes.string
};

export default Dishes;
