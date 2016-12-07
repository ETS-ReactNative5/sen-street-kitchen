import React from 'react';

const TOKEN = '13217349.7cb896c.1d9a90678c304ccda98f9ae1433123f5';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ComponentName';
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        // console.log($);
    fetch('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + TOKEN, { mode: 'no-cors'})
            .then(res => res.toJSON())
            .then(json => console.log(json));
    }

    render() {
        return (
            <div>ComponentName</div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
