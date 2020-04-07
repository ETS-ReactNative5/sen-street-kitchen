import React from "react";

// import checkClosed from "./../helpers/checkClosed";
// import restaurants from "./../data/restaurants";

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
    // const today = new Date().getDay();

    const { locale, setLocaleToSwedish, setLocaleToEnglish } = this.props;

    return (
      <div className="topbar">
        <div className="topbar__title">{locale==='en'?'Opening Hours':'Öppettider'}</div>
        {locale==='en'?(
          <span className="topbar__name">
            Deviations from normal opening hours may occur. For today's opening hours, we refer to SEN Street Kitchen's <a href="https://www.instagram.com/senstreetkitchen/">Instagram</a> and <a href="https://www.facebook.com/SenStockholm">Facebook</a> stories.
          </span>
        ):(
          <span className="topbar__name">
            Avvikelser från normala öppettider kan förekomma. För dagens öppettider hänvisar vi till SEN Street Kitchens stories på <a href="https://www.instagram.com/senstreetkitchen/">Instagram</a> och <a href="https://www.facebook.com/SenStockholm">Facebook</a>.
          </span>
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
