import React from 'react';

import './OpeningHours.css';

class OpeningHours extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'OpeningHours';
    }

    checkClosed(string) {
        if (string === 'Closed' && this.props.locale != 'en') return 'Stängt';
        return string;
    }

    render() {
        const { openingHours, locale } = this.props;
        const str = {
            monFri: locale === 'en' ? (
                    'Mon-Fri'
                ) : (
                    'Mån-Fre'
                ),
            sat: locale === 'en' ? (
                    'Sat'
                ) : (
                    'Lör'
                ),
            sun: locale === 'en' ? (
                    'Sun'
                ) : (
                    'Sön'
                )
        };

        return (
            <div className="opening-hours">
                <span className="opening-hours__days">{ str.monFri }</span> <span className="opening-hours__period">{ openingHours[1] }</span>
                <span className="opening-hours__sep">|</span>
                <span className="opening-hours__days">{ str.sat }</span> <span className="opening-hours__period">{ openingHours[6] }</span>
                <span className="opening-hours__sep">|</span>
                <span className="opening-hours__days">{ str.sun }</span> <span className="opening-hours__period">{ this.checkClosed(openingHours[0]) }</span>
            </div>
        );
    }
}

OpeningHours.propTypes = {
    restaurant: React.PropTypes.object
};

export default OpeningHours;
