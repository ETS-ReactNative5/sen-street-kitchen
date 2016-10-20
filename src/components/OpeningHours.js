import React from 'react';

import './OpeningHours.css';

class OpeningHours extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'OpeningHours';
        console.log(this.props);
    }

    render() {
        const { openingHours } = this.props;

        return (
            <div className="opening-hours">
                <span className="opening-hours__days">Mon-Fri</span> <span className="opening-hours__period">{ openingHours[0] }</span>
                <span className="opening-hours__sep">|</span>
                <span className="opening-hours__days">Sat</span> <span className="opening-hours__period">{ openingHours[5] }</span>
                <span className="opening-hours__sep">|</span>
                <span className="opening-hours__days">Sun</span> <span className="opening-hours__period">{ openingHours[6] }</span>
            </div>
        );
    }
}

OpeningHours.propTypes = {
    restaurant: React.PropTypes.object
};

export default OpeningHours;
