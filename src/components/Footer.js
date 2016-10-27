import React from 'react';
import { Link } from 'react-router';

import restaurants from './../data/restaurants.json';
import logo from './../assets/logo.svg';

import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
    }

    getNumberLink(number) {
        return 'tel:0046' + number
                                .slice(1)
                                .replace(/ /g, '')
                                .replace(/-/g, '');
    }

    render() {
        const { locale } = this.props;

        return (
            <div className="footer-wrapper">
                <div className="footer">
                    <div className="footer__col">
                        <img className="footer__logo" src={ logo } alt="Sen Street Kitchen"/>
                    </div>
                    <div className="footer__col">
                        <div className="footer-menu">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item">
                                    <Link
                                        className="footer-menu__link"
                                        to="/">
                                        { locale === 'en' ? 'Home' : 'Hem' }
                                    </Link>
                                </li>
                                {/*<li className="footer-menu__list-item">
                                    <Link
                                        className="footer-menu__link"
                                        to="/about-us">
                                        About Us
                                    </Link>
                                </li>*/}
                                { restaurants.map(restaurant => (
                                    <li key={ restaurant.slug } className="footer-menu__list-item">
                                        <Link
                                            className="footer-menu__link"
                                            to={`/restaurants/${ restaurant.slug }`}>
                                            { restaurant.name }
                                        </Link>
                                    </li>
                                )) }
                                <li className="footer-menu__list-item">
                                    <Link
                                        className="footer-menu__link"
                                        to="/contact-us">
                                        { locale === 'en' ? 'Contact Us' : 'Kontakta oss' }
                                    </Link>
                                </li>
                                <li className="footer-menu__list-item">
                                    <Link
                                        className="footer-menu__link"
                                        to="/careers">
                                        { locale === 'en' ? 'Work With SEN' : 'Arbeta med SEN' }
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer-menu">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                                    </svg>
                                    <a href="https://www.facebook.com/SenStockholm">Stockholm</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                                    </svg>
                                    <a href="https://www.facebook.com/pages/Sen-Street-Kitchen-Ume%C3%A5/1525861991050193">Umeå</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                    </svg>
                                    <a href="https://www.instagram.com/senstreetkitchen/">Stockholm</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                    </svg>
                                    <a href="https://www.instagram.com/senstreetkitchenumea/">Umeå</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col">
                        <ul className="footer-menu__list">
                            { restaurants.map(restaurant => (
                                <li key={ restaurant.slug } className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                    </svg>
                                    { restaurant.name }:
                                    <a
                                        style={{ marginLeft: '.25em' }}
                                        href={ this.getNumberLink(restaurant.phoneNumber) }
                                    >
                                        { restaurant.phoneNumber }
                                    </a>
                                </li>
                            )) }

                            { restaurants.map(restaurant => (
                                <li key={ restaurant.slug } style={{ textTransform: 'lowercase' }} className="footer-menu__list-item">
                                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                                        <path fill="#333333" d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z" />
                                    </svg>
                                    <a href={`mailto:${ restaurant.email }`}>{ restaurant.email }</a>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    locale: React.PropTypes.string
};

export default Footer;
