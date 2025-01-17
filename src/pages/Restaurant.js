/* globals process */

import React from "react";
import Helmet from "react-helmet";
import find from "lodash.find";
import flatten from "lodash.flatten";

import slug from "./../helpers/slug";

import Map from "./../components/Map.js";
import OpeningHours from "./../components/OpeningHours";
import Dishes from "./../components/Dishes";
import PhoneIcon from "./../components/PhoneIcon";
import MailIcon from "./../components/MailIcon";
import PdfIcon from "./../components/PdfIcon";

import ogimage from "./../assets/ogimage.png";
import foodora from "./../assets/foodora.svg";
import tripadvisor from "./../assets/tripadvisor.png";
import restaurants from "./../data/restaurants.json";
import "./Restaurant.css";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Restaurant";
    this.state = {
      restaurant: null
    };
  }

  getNumberLink(number) {
    if (!number) return null;
    return (
      "tel:0046" +
      number
        .slice(1)
        .replace(/ /g, "")
        .replace(/-/g, "")
    );
  }

  getRestaurant(slug) {
    let restaurant = null;

    restaurants.forEach(city => {
      city.units.forEach(unit => {
        if (unit.slug === slug) {
          restaurant = unit;
        }
      });
    });

    this.setState({ restaurant });
  }

  componentWillMount() {
    this.getRestaurant(this.props.params.address);
  }

  componentWillReceiveProps(nextProps) {
    this.getRestaurant(nextProps.params.address);
  }

  render() {
    const { locale } = this.props;
    const { restaurant } = this.state;
    const str = {
      cashlessRestaurant:
        locale === "en" ? "Cashless Restaurant" : "Kontantlös restaurang",
      ogDescription:
        locale === "en"
          ? `View the menu for SEN Street Kitchen, ${restaurant.name}, ${restaurant.address.city}.'`
          : `Se menyn för SEN Street Kitchen, ${restaurant.name}, ${restaurant.address.city}.'`,
      orderNow: locale === "en" ? "Order Online Now!" : "Beställ online nu!",
      downloadMenu: locale === "en" ? "Download Menu" : "Ladda ner meny",
      downloadLunchMenu:
        locale === "en" ? "Download lunch menu" : "Ladda ner lunchmeny",
      downloadEveningMenu:
        locale === "en" ? "Download evening menu" : "Ladda ner kvällsmeny"
    };

    return (
      <div>
        <Helmet
          title={restaurant.name + " | SEN Street Kitchen"}
          meta={[
            { property: "og:title", content: restaurant.name },
            { property: "og:type", content: "article" },
            {
              property: "og:description",
              content: str.ogDescription
            },
            {
              property: "og:image",
              content: document.location.origin + ogimage
            }
          ]}
        />

        {restaurant ? (
          <div className="restaurant">
            <div className="restaurant__city">{restaurant.address.city}</div>
            <h1 className="restaurant__name">
              {restaurant.foodora || restaurant.tripadvisor ? (
                <span>
                  {restaurant.foodora && (
                    <span className="has-foodora">
                      <span className="foodora-title">{restaurant.name}</span>
                      <a href={restaurant.foodora}>
                        <img className="foodora" src={foodora} alt="Foodora" />
                      </a>
                    </span>
                  )}
                  {restaurant.tripadvisor && (
                    <span className="has-foodora">
                      <span className="foodora-title">{restaurant.name}</span>
                      <a href={restaurant.tripadvisor}>
                        <img
                          className="tripadvisor"
                          src={tripadvisor}
                          alt="Tripadvisor"
                        />
                      </a>
                    </span>
                  )}
                </span>
              ) : (
                <span>{restaurant.name}</span>
              )}
            </h1>
            <OpeningHours
              locale={locale}
              openingHours={restaurant.openingHours}
              restaurant={restaurant.slug}
            />

            <div
              className="restaurant__contact"
              style={{ marginBottom: "1em" }}
            >
              <span>{str.cashlessRestaurant}</span>

              {restaurant.email && (
                <span>
                  <MailIcon />
                  <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
                </span>
              )}

              {restaurant.phoneNumber && (
                <span>
                  <PhoneIcon />
                  <a href={this.getNumberLink(restaurant.phoneNumber)}>
                    {restaurant.phoneNumber}
                  </a>
                </span>
              )}

              {restaurant.foodora && (
                <span className="hide-desktop">
                  <a href={restaurant.foodora}>Foodora | {str.orderNow}</a>
                </span>
              )}
            </div>
            <div className="restaurant__contact">
              <span>
                {restaurant.slug === "renmarkstorget-12" ? (
                  <span>
                    <PdfIcon />
                    <a
                      href={`${process.env.PUBLIC_URL}/pdf/sen-black-lunch.pdf`}
                    >
                      {str.downloadLunchMenu}
                    </a>
                    <div style={{ marginLeft: "10px" }} />
                    <PdfIcon />
                    <a
                      href={`${process.env.PUBLIC_URL}/pdf/sen-black-kvall.pdf`}
                    >
                      {str.downloadEveningMenu}
                    </a>
                  </span>
                ) : (
                  <span>
                    <PdfIcon />
                    <a
                      href={`${process.env.PUBLIC_URL}/pdf/sen-${slug(
                        restaurant.address.city
                      )}-menu.pdf`}
                    >
                      {str.downloadMenu}
                    </a>
                  </span>
                )}
              </span>
            </div>
            <Dishes
              locale={locale}
              city={restaurant.address.city}
              dishes={restaurant.menu}
            />
            <Map restaurant={restaurant} />
          </div>
        ) : null}
      </div>
    );
  }
}

Restaurant.propTypes = {
  params: React.PropTypes.object,
  locale: React.PropTypes.string
};

export default Restaurant;
