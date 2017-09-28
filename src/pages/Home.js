import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Modal from 'react-modal';

import ogimage from './../assets/ogimage.png';
import restaurants from './../data/restaurants.json';
import './Home.css';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: 2,
        textAlign: 'center',
        padding: '2em 4em'
    }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
        this.state = {
            modalIsOpen: true
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        const { locale } = this.props;
        const str = {
            homeTitle:
                locale === 'en'
                    ? 'Street Markets in Bangkok or Ramen Stalls in Tokyo'
                    : 'Gatumarknad i Bangkok eller ramenstånd i Tokyo',
            homeIngress:
                locale === 'en'
                    ? 'SEN Street Kitchen recreates the authentic flavors, smells and emotions at the bustling street markets in Hanoi and Bangkok, ramen stalls in Tokyo and all other food courts throughout East Asia.'
                    : 'SEN Street Kitchen återskapar de autentiska smakerna, dofterna och känslorna vid de livliga gatumarknaderna i Hanoi och Bangkok, ramenstånden i Tokyo samt alla andra gatukök över hela östra Asien.',
            homeIngress2:
                locale === 'en'
                    ? 'Simple, fast, healthy and fresh.'
                    : 'Enkelt, snabbt, nyttigt och fräscht.',
            ourRestaurants:
                locale === 'en' ? 'Our Restaurants' : 'Våra restauranger',
            opensAutumn2017:
                locale === 'en' ? 'Opens October 26' : 'Öppnar 26 oktober'
        };

        return (
            <div className="home">
                <Helmet
                    title={
                        (locale === 'en' ? 'Home' : 'Hem') +
                        ' | SEN Street Kitchen'
                    }
                    meta={[
                        {
                            property: 'og:title',
                            content:
                                locale === 'en'
                                    ? 'Welcome to SEN Street Kitchen'
                                    : 'Välkommen till SEN Street Kitchen'
                        },
                        { property: 'og:type', content: 'website' },
                        {
                            property: 'og:description',
                            content: str.homeIngress
                        },
                        {
                            property: 'og:image',
                            content: document.location.origin + ogimage
                        }
                    ]}
                />

                <h1 className="home__title">{str.homeTitle}</h1>

                <p className="home__ingress">{str.homeIngress}</p>

                <p className="home__ingress">{str.homeIngress2}</p>

                <div className="home__subtitle">{str.ourRestaurants}</div>

                <div className="home__restaurants">
                    {restaurants.map(restaurant => (
                        <div key={restaurant.slug} className="home__restaurant">
                            <Link to={`/restaurants/${restaurant.slug}`}>
                                <div>{restaurant.address.city}</div>
                                <h2>{restaurant.name}</h2>
                            </Link>
                        </div>
                    ))}
                    <div className="home__restaurant" onClick={this.openModal}>
                        <div>Jönköping</div>
                        <h2>A6 Center</h2>
                        <p>{str.opensAutumn2017}</p>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="A6 Center"
                >
                    <h2 style={{ textTransform: 'uppercase' }}>
                        {locale === 'en' ? (
                            'Hello Jönköping!'
                        ) : (
                            'Hej Jönköping!'
                        )}
                    </h2>
                    <p>
                        {locale === 'en' ? (
                            'On October 26th we will open at A6 Center.'
                        ) : (
                            'Den 26 oktober vi öppnar portarna i A6 Center.'
                        )}
                        <br />
                        {locale === 'en' ? 'Welcome in!' : 'Välkommen in!'}
                    </p>
                </Modal>
            </div>
        );
    }
}

Home.propTypes = {
    locale: React.PropTypes.string
};

export default Home;
