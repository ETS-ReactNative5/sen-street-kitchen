import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class Sen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'en'
        };
    }

    componentWillMount() {
        const locale = localStorage.getItem('senStreetKitchenLocale');

        if (locale) {
            this.setState({ locale });
        }
    }

    setLocaleToSwedish() {
        localStorage.setItem('senStreetKitchenLocale', 'sv');
        this.setState({ locale: 'sv' });
    }

    setLocaleToEnglish() {
        localStorage.setItem('senStreetKitchenLocale', 'en');
        this.setState({ locale: 'en' });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                locale: this.state.locale,
                setLocaleToSwedish: this.setLocaleToSwedish.bind(this),
                setLocaleToEnglish: this.setLocaleToEnglish.bind(this)
            })
        );

        return (
            <div>
                <Header
                    { ...this.props }
                    locale={this.state.locale}
                    setLocaleToSwedish={this.setLocaleToSwedish.bind(this)}
                    setLocaleToEnglish={this.setLocaleToEnglish.bind(this)}
                />

                {childrenWithProps}

                <Footer
                    locale={this.state.locale}
                    setLocaleToSwedish={this.setLocaleToSwedish.bind(this)}
                    setLocaleToEnglish={this.setLocaleToEnglish.bind(this)}
                />
            </div>
        );
    }
}

Sen.propTypes = {
    children: React.PropTypes.any
};

export default Sen;
