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
        return (
            <div className="contact">
                <div className="contact__subtitle">
                    What's on your mind?
                </div>

                <h1 className="contact__title">Get in Touch</h1>

                <p>If you have an enquiry about booking a table, allergens in our food or dietary requirements, please see our FAQ’s. Alternatively, if you couldn’t find your answer or have a question about anything else, please use the contact form below.</p>

                <div className="contact__restaurants">
                    { restaurants.map(resturant => (
                        <div key={ resturant.slug } className="contact__restaurant">
                            <strong>Address</strong><br />
                            { resturant.address.street }<br />
                            { resturant.address.zipCode } { resturant.address.city }<br />
                            { resturant.address.country }<br />
                            <strong>Phonenumber</strong><br />
                            { resturant.phoneNumber }
                        </div>
                    )) }
                </div>


                <p>If you'd like to work with SEN, check out our <Link to="/careers">jobs page</Link>.</p>


            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
