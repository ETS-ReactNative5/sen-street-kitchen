import React from 'react';

import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Map';
    }

    getMap(slug) {
        switch (slug) {
        case 'avion-shopping':
            return (
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1761.0567378302924!2d20.25256311627652!3d63.80754448344309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c658def967703%3A0x9c9010e87e339dfe!2sSEN+Street+Kitchen!5e0!3m2!1ssv!2sse!4v1476956761504" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            );
        case 'regeringsgatan-26':
            return (
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.093003505197!2d18.066278416094626!3d59.331401081659585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5ebc6f78af%3A0xc49a5ae0a3bef689!2sSen+Street+Kitchen!5e0!3m2!1ssv!2sse!4v1476956709017" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            );
        case 'kungsbron-8':
            return (
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.974666382245!2d18.052218216094683!3d59.333376781660256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6139150543%3A0xebf7ddedaf010ca9!2sSEN+Street+Kitchen!5e0!3m2!1ssv!2sse!4v1476956135749" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            );
        default:
            return '';
        }
    }

    render() {
        const { restaurant } = this.props;

        return (
            <div>
                { this.getMap(restaurant.slug) }
            </div>
        );
    }
}

Map.propTypes = {
    restaurant: React.PropTypes.object
};

export default Map;
