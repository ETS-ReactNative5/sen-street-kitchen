import React from 'react';

import './Careers.css';

class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Careers';
    }

    render() {
        return (
            <div className="careers">
                <div className="careers__subtitle">
                    Add Flavor to Your Career
                </div>

                <h1 className="careers__title">Work With SEN</h1>

                <p>We are currently in a very expansive phase and are constantly looking for good people to work with. We’d love to hear from you! Send an email to <a href="mailto:info@senstreetkitchen.com">info@senstreetkitchen.com</a> (include a short cover letter and your resume) and introduce yourself!</p>
                <p>Thanks! Cảm ơn! Terima kasih! ขอบคุณ! 감사!</p>
            </div>
        );
    }
}

Careers.propTypes = {};

export default Careers;
