import React from 'react';
import Helmet from 'react-helmet';

import slug from './../helpers/slug';

import Map from './../components/Map.js';
import OpeningHours from './../components/OpeningHours';
import Dishes from './../components/Dishes';
import PhoneIcon from './../components/PhoneIcon';
import MailIcon from './../components/MailIcon';
import PdfIcon from './../components/PdfIcon';

import ogimage from './../assets/ogimage.png';
import foodora from './../assets/foodora.svg';
import restaurants from './../data/restaurants.json';
import './Restaurant.css';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Restaurant';
        this.state = {
            restaurant: null
        };
    }

    getNumberLink(number) {
        return 'tel:0046' + number.slice(1).replace(/ /g, '').replace(/-/g, '');
    }

    getRestaurant(slug) {
        const restaurant = restaurants.find(r => r.slug === slug);
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
            cashlessRestaurant: locale === 'en' ? (
                    'Cashless Restaurant'
                ) : (
                    'Kontantlös restaurang'
                ),
            ogDescription: locale === 'en' ? (
                    `View the menu for SEN Street Kitchen, ${restaurant.name}, ${restaurant.address.city}.'`
                ) : (
                    `Se menyn för SEN Street Kitchen, ${restaurant.name}, ${restaurant.address.city}.'`
                ),
            orderNow: locale === 'en' ? (
                    'Order Online Now!'
                ) : (
                    'Beställ online nu!'
                ),
            downloadMenu: locale === 'en' ? (
                    'Download Menu'
                ) : (
                    'Ladda ner meny'
                ),
            downloadAllergyGuide: locale === 'en' ? (
                    'Allergy Guide'
                ) : (
                    'Allergiguide'
                )
        };

        return (
            <div>
                <Helmet
                    title={ restaurant.name + ' | SEN Street Kitchen' }
                    meta={[
                        { property: 'og:title',       content: restaurant.name },
                        { property: 'og:type',        content: 'article' },
                        { property: 'og:description', content: str.ogDescription },
                        { property: 'og:image',       content: document.location.origin + ogimage }
                    ]}
                />

                {restaurant ? (
                    <div className="restaurant">
                        <div className="restaurant__city">
                            { restaurant.address.city }
                        </div>

                        <h1 className="restaurant__name">
                            { restaurant.foodora ? (
                                <span className="has-foodora">
                                    <span className="foodora-title">{ restaurant.name }</span>
                                    <a href={ restaurant.foodora }>
                                        <img
                                            className="foodora"
                                            src={ foodora }
                                            alt="Foodora"
                                        />
                                    </a>
                                </span>
                            ) : (
                                <span>{ restaurant.name }</span>
                            ) }

                        </h1>

                        <OpeningHours
                            locale={ locale }
                            openingHours={ restaurant.openingHours }
                            restaurant={ restaurant.slug }
                        />

                        <div className="restaurant__contact" style={{ marginBottom: '1em' }}>
                            <span>{ str.cashlessRestaurant }</span>

                            <span>
                                <MailIcon />
                                <a href={`mailto:${ restaurant.email }`}>{ restaurant.email }</a>
                            </span>

                            <span>
                                <PhoneIcon />
                                <a href={ this.getNumberLink(restaurant.phoneNumber) }>{ restaurant.phoneNumber }</a>
                            </span>

                            { restaurant.foodora ? (
                                <span className="hide-desktop">
                                    <a href={ restaurant.foodora }>
                                        Foodora | { str.orderNow }
                                    </a>
                                </span>
                            ) : null }
                        </div>

                        <div className="restaurant__contact">
                            <span>
                                <PdfIcon />
                                <a href={ `${process.env.PUBLIC_URL}/pdf/sen-${slug(restaurant.address.city)}-menu.pdf` }>{ str.downloadMenu }</a>
                            </span>

                            <span>
                                <PdfIcon />
                                <a href={ `${process.env.PUBLIC_URL}/pdf/sen-allergiguide.pdf` }>{ str.downloadAllergyGuide }</a>
                            </span>
                        </div>

                        <Dishes locale={ locale } city={ restaurant.address.city } dishes={ restaurant.menu } />

                        <Map restaurant={ restaurant } />
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
