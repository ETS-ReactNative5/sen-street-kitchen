import React from 'react';
import { Link } from 'react-router';

import PhoneIcon from './../components/PhoneIcon';
import MailIcon from './../components/MailIcon';
import FacebookIcon from './../components/FacebookIcon';
import InstagramIcon from './../components/InstagramIcon';

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
                                    <FacebookIcon />
                                    <a href="https://www.facebook.com/SenStockholm">Stockholm</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <FacebookIcon />
                                    <a href="https://www.facebook.com/pages/Sen-Street-Kitchen-Ume%C3%A5/1525861991050193">Umeå</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <InstagramIcon />
                                    <a href="https://www.instagram.com/senstreetkitchen/">Stockholm</a>
                                </li>
                                <li className="footer-menu__list-item">
                                    <InstagramIcon />
                                    <a href="https://www.instagram.com/senstreetkitchenumea/">Umeå</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col">
                        <ul className="footer-menu__list">
                            { restaurants.map(restaurant => (
                                <li key={ restaurant.slug } className="footer-menu__list-item">
                                    <PhoneIcon />
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
                                    <MailIcon />
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
