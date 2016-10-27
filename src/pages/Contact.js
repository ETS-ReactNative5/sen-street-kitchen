import 'whatwg-fetch';
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import restaurants from './../data/restaurants.json';
import ogimage from './../assets/ogimage.png';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contact';
    }

    render() {
        const { locale } = this.props;
        const str = {
            ogTitle: locale === 'en' ? (
                    'Contact Us'
                ) : (
                    'Kontakta oss'
                ),
            subtitle: locale === 'en' ? (
                    'What’s on your mind?'
                ) : (
                    'Vi vill gärna höra från dig!'
                ),
            getInTouch: locale === 'en' ? (
                    'Get in Touch'
                ) : (
                    'Kontakta oss'
                ),
            workWithSEN: locale === 'en' ? (
                    'If you’d like to work with SEN, check out our'
                ) : (
                    'Om du vill arbeta tillsammans med SEN, kolla in vår'
                ),
            jobsPage: locale === 'en' ? (
                    'jobs page'
                ) : (
                    'jobbsida'
                )
        };

        return (
            <div className="contact">
                <Helmet
                    title={ str.ogTitle + ' | SEN Street Kitchen' }
                    meta={[
                        { property: 'og:title',       content: str.ogTitle },
                        { property: 'og:type',        content: 'article' },
                        { property: 'og:description', content: str.ogDescription },
                        { property: 'og:image',       content: document.location.origin + ogimage }
                    ]}
                />

                <div className="contact__subtitle">
                    { str.subtitle }
                </div>

                <h1 className="contact__title">{ str.getInTouch }</h1>

                <div className="contact__restaurants">
                    { restaurants.map(resturant => (
                        <div key={ resturant.slug } className="contact__restaurant">
                            { resturant.address.street }<br />
                            { resturant.address.zipCode } { resturant.address.city }<br />
                            { resturant.address.country }<br />
                            <br />
                            { resturant.phoneNumber }<br/>
                            <a href={ `mailto:${ resturant.email }` }>Email</a>
                        </div>
                    )) }
                </div>

                {/*
                <form
                    method="post"
                    action="http://www.example.com/cgi-bin/FormMail.pl"
                    acceptCharset="ISO-8859-1"
                    onSubmit="var originalCharset = document.charset; document.charset = 'ISO-8859-1'; window.onbeforeunload = function () { document.charset=originalCharset; };"
                >
                    Namn
                    <br />
                    <input name="realname" />
                    <br />
                    E-post
                    <br />
                    <input name="email" />
                    <br />
                    Meddelande
                    <br />
                    <textarea cols="40" rows="10" name="Message"></textarea>
                    <br />
                    <input type="submit" value="Skicka" />
                    <input type="hidden" name="recipient" value="email@example.com" />
                    <input type="hidden" name="subject" value="Subject" />
                    <input type="hidden" name="redirect" value="http://www.example.com/tack.html" />
                    <input type="hidden" name="missing_fields_redirect" value="http://www.example.com/fel.html" />
                    <input type="hidden" name="required" value="realname,email,Message" />
                </form>
                */}

                <p>{ str.workWithSEN } <Link to="/careers">{ str.jobsPage }</Link>.</p>
            </div>
        );
    }
}

Contact.propTypes = {
    locale: React.PropTypes.string
};

export default Contact;
