import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ogimage from './../assets/ogimage.png';
import restaurants from './../data/restaurants.json';
import './Home.css';

class Home extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }

  render() {
    const { locale } = this.props;
    const str = {
      homeTitle:
        locale === 'en'
          ? 'Street Markets in Bangkok or Ramen Stalls in Tokyo'
          : 'Gatumarknad i Bangkok eller ramenstånd i Tokyo',
      homeIngress:
        locale === 'en'
          ? 'SEN Street Kitchen recreates the authentic flavors, smells and emotions at the bustling street markets in Hanoi and Bangkok, ramen stalls in Tokyo and all other food courts throughout East Asia.'
          : 'SEN Street Kitchen återskapar de autentiska smakerna, dofterna och känslorna vid de livliga gatumarknaderna i Hanoi och Bangkok, ramenstånden i Tokyo samt alla andra gatukök över hela östra Asien.',
      homeIngress2:
        locale === 'en'
          ? 'Simple, fast, healthy and fresh.'
          : 'Enkelt, snabbt, nyttigt och fräscht.',
      ourRestaurants: locale === 'en' ? 'Our Restaurants' : 'Våra restauranger',
      opensQ42019: locale === 'en' ? 'Opens Q4 2019' : 'Öppnar Q4 2019',
    };

    return (
      <div className="home">
        <Helmet
          title={(locale === 'en' ? 'Home' : 'Hem') + ' | SEN Street Kitchen'}
          meta={[
            {
              property: 'og:title',
              content:
                locale === 'en'
                  ? 'Welcome to SEN Street Kitchen'
                  : 'Välkommen till SEN Street Kitchen',
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: str.homeIngress,
            },
            {
              property: 'og:image',
              content: document.location.origin + ogimage,
            },
          ]}
        />

        <h1 className="home__title">{str.homeTitle}</h1>

        <p className="home__ingress">{str.homeIngress}</p>

        <p className="home__ingress">{str.homeIngress2}</p>

        <div className="home__subtitle">{str.ourRestaurants}</div>

        <div className="home__restaurants">
          {restaurants.map(({ units }) =>
            units.map(unit => (
              <div key={unit.slug} className="home__restaurant">
                <Link to={`/restaurants/${unit.slug}`}>
                  <div>{unit.name}</div>
                  {/* <h2>{restaurant.name}</h2> */}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  locale: PropTypes.string,
};

export default Home;
