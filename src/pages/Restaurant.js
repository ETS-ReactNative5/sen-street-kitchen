import React from 'react';
import Titelize from './../helpers/titelize';

class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Restaurants';

        const { address } = this.props.params;

        this.state = {
            slug: address,
            title: Titelize(address)
        };
    }

    render() {
        const { slug, title } = this.state;

        return (
            <div>
                Restaurant
                <ul>
                    <li>{ slug }</li>
                    <li>{ title }</li>
                </ul>
            </div>
        );
    }
}

Restaurants.propTypes = {};

export default Restaurants;
