import React from 'react';
import { Link, IndexLink } from 'react-router';

import restaurants from './../data/restaurants.json';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Menu';
  }

  render() {
    const { locale } = this.props;

    return (
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <IndexLink
              className="menu__link"
              activeClassName="menu__link--active"
              to="/"
            >
              {locale === 'en' ? <span>Home</span> : <span>Hem</span>}
            </IndexLink>
          </li>

          {restaurants.map(({ units }) =>
            units.map(({ slug, name }) => (
              <li key={slug} className="menu__list-item">
                <Link
                  className="menu__link"
                  activeClassName="menu__link--active"
                  to={`/restaurants/${slug}`}
                >
                  {name}
                </Link>
              </li>
            ))
          )}
          <li className="menu__list-item">
            <Link
              className="menu__link"
              activeClassName="menu__link--active"
              to="/contact-us"
            >
              {locale === 'en' ? (
                <span>Contact Us</span>
              ) : (
                <span>Kontakta oss</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  locale: React.PropTypes.string,
};

export default Menu;
