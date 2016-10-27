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
        const { locale } = this.props;
        const str = {
            homeTitle: locale === 'en' ? (
                    'Street Markets in Bangkok or Ramen Stalls in Tokyo'
                ) : (
                    'Gatumarknad i Bangkok eller ramenstånd i Tokyo'
                ),
            homeIngress: locale === 'en' ? (
                    'SEN Street Kitchen recreates the authentic flavors, smells and emotions at the bustling street markets in Hanoi and Bangkok, ramen stalls in Tokyo and all other food courts throughout East Asia.'
                ) : (
                    'SEN Street Kitchen återskapar de autentiska smakerna, dofterna och känslorna vid de livliga gatumarknaderna i Hanoi och Bangkok, ramenstånden i Tokyo samt alla andra gatukök över hela östra Asien.'
                ),
            homeIngress2: locale === 'en' ? (
                    'Simple, fast, healthy and fresh.'
                ) : (
                    'Enkelt, snabbt, nyttigt och fräscht.'
                ),
            ourRestaurants: locale === 'en' ? (
                    'Our Restaurants'
                ) : (
                    'Våra restauranger'
                )
        };

        return (
            <div className="home">
                <h1 className="home__title">
                    { str.homeTitle }
                </h1>

                <p className="home__ingress">
                    { str.homeIngress }
                </p>

                <p className="home__ingress">
                    { str.homeIngress2 }
                </p>

                <div className="home__subtitle">
                    { str.ourRestaurants }
                </div>

                <div className="home__restaurants">
                    { restaurants.map(restaurant => (
                        <div key={ restaurant.slug } className="home__restaurant">
                            <Link to={`/restaurants/${ restaurant.slug }`}>
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
