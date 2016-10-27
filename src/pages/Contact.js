import 'whatwg-fetch';
import React from 'react';
import { Link } from 'react-router';

import restaurants from './../data/restaurants.json';

import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contact';
    }

    render() {
        const { locale } = this.props;

        return (
            <div className="contact">
                <div className="contact__subtitle">
                    What's on your mind?
                </div>

                <h1 className="contact__title">Get in Touch</h1>

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

                <p>If you'd like to work with SEN, check out our <Link to="/careers">jobs page</Link>.</p>
            </div>
        );
    }
}

Contact.propTypes = {
    locale: React.PropTypes.string
};

export default Contact;
