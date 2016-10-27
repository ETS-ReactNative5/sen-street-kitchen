import React from 'react';
import Helmet from 'react-helmet';

import ogimage from './../assets/ogimage.png';
import './Careers.css';

class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Careers';
    }

    createMarkup(string) {
        return { __html: string };
    }

    render() {
        const { locale } = this.props;
        const str = {
            ogTitle: locale === 'en' ? (
                    'Work With SEN'
                ) : (
                    'Arbeta med SEN'
                ),
            subtitle: locale === 'en' ? (
                    'Add Flavor to Your Career'
                ) : (
                    'Ta nästa steg i din karriär'
                ),
            paragraph: locale === 'en' ? (
                    'We are currently in a very expansive phase and are constantly looking for good people to work with. We’d love to hear from you! Send an email to <a href="mailto:info@senstreetkitchen.com">info@senstreetkitchen.com</a> (include a short cover letter and your resume) and introduce yourself!'
                ) : (
                    'Vi växer just nu kraftigt och med det behöver vi alltid duktiga medarbetare. Vi vill gärna träffa dig! Skicka ett mail till <a href="mailto:info@senstreetkitchen.com">info@senstreetkitchen.com</a> (inkludera ett kort personligt brev och ditt CV) och säg hej!'
                )
        };

        return (
            <div className="careers">
                <Helmet
                    title={ str.ogTitle + ' | SEN Street Kitchen' }
                    meta={[
                        { property: 'og:title',       content: str.ogTitle },
                        { property: 'og:type',        content: 'website' },
                        { property: 'og:description', content: str.paragraph },
                        { property: 'og:image',       content: document.location.origin + ogimage }
                    ]}
                />

                <div className="careers__subtitle">
                    { str.subtitle }
                </div>

                <h1 className="careers__title">{ str.ogTitle }</h1>

                <p dangerouslySetInnerHTML={ this.createMarkup(str.paragraph) }></p>
                <p>Thanks! Cảm ơn! Terima kasih! ขอบคุณ! 감사!</p>
            </div>
        );
    }
}

Careers.propTypes = {
    locale: React.PropTypes.string
};

export default Careers;
