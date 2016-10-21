import React from 'react';

import './NoMatch.css';

class NoMatch extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NoMatch';
    }

    render() {
        const { location } = this.props;

        return (
            <div className="no-match">
                <h1 className="no-match__title">Not Found</h1>
                <p style={{ textAlign: 'center' }}>The requested URL <code>{ location.pathname }</code> was not found on this server.</p>
            </div>
        );
    }
}

NoMatch.propTypes = {
    location: React.PropTypes.object
};

export default NoMatch;
