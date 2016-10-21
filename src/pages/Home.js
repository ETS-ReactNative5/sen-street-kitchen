import React from 'react';
import { Link } from 'react-router';

import restaurants from './../data/restaurants.json';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }

    render() {
        return (
            <div className="home">
                <div className="home__subtitle">
                    Our Restaurants
                </div>

                <h1 className="home__title">
                    Authentic Southeast <br />Asian Flavored Cuisine
                </h1>

                <div className="home__restaurants">
                    { restaurants.map(restaurant => (
                        <div className="home__restaurant">
                            <Link key={ restaurant.slug } to={`/restaurants/${ restaurant.slug }`}>
                                <div>{ restaurant.address.city }</div>
                                <h2>{ restaurant.name }</h2>
                            </Link>
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
