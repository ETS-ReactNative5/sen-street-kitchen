import React from "react";

import checkClosed from "./../helpers/checkClosed";

import restaurants from "./../data/restaurants";

import "./TopBar.css";

import gb from "./../assets/gb.svg";
import se from "./../assets/se.svg";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "TopBar";
  }

  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }

  render() {
    const today = new Date().getDay();

    const { locale, setLocaleToSwedish, setLocaleToEnglish } = this.props;

    return (
      <div className="topbar">
        {locale === "en" ? (
          <div className="topbar__title">Opening Hours Today</div>
        ) : (
          <div className="topbar__title">Öppettider i dag</div>
        )}

        {restaurants.map(({ units }) =>
          units.map(restaurant => (
            <div className="topbar__restaurant" key={restaurant.slug}>
              <span className="topbar__name">{restaurant.name}</span>

              <span className="topbar__hours">
                {checkClosed({
                  string: restaurant.openingHours[today],
                  restaurant: restaurant.slug,
                  locale: locale,
                  deviation: true
                })}
              </span>
            </div>
          ))
        )}

        {locale === "en" ? (
          <img
            onClick={setLocaleToSwedish.bind(this)}
            className="flag"
            src={se}
            alt="Svenska"
          />
        ) : (
          <img
            onClick={setLocaleToEnglish.bind(this)}
            className="flag"
            src={gb}
            alt="English"
          />
        )}
      </div>
    );
  }
}

TopBar.propTypes = {
  locale: React.PropTypes.string,
  setLocaleToSwedish: React.PropTypes.func,
  setLocaleToEnglish: React.PropTypes.func
};

export default TopBar;
