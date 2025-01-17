import React from 'react';

import checkClosed from './../helpers/checkClosed';

import './OpeningHours.css';

class OpeningHours extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'OpeningHours';
  }

  render() {
    const { openingHours, restaurant, locale } = this.props;
    const str = {
      monFri: locale === 'en' ? 'Mon-Fri' : 'Mån-Fre',
      sat: locale === 'en' ? 'Sat' : 'Lör',
      sun: locale === 'en' ? 'Sun' : 'Sön',
    };

    return (
      <div className='opening-hours'>
        {restaurant === 'renmarkstorget-12' ? (
          <span>
            <span className='opening-hours__days'>
              {locale === 'en' ? 'Mon-Thu' : 'Mån-Tor'}
            </span>
            <span className='opening-hours__period'>
              {checkClosed({
                string: openingHours[1],
                restaurant: restaurant,
                locale: locale,
              })}
            </span>
          </span>
        ) : (
          <span>
            <span className='opening-hours__days'>{str.monFri}</span>
            <span className='opening-hours__period'>
              {checkClosed({
                string: openingHours[1],
                restaurant: restaurant,
                locale: locale,
              })}
            </span>
          </span>
        )}
        <span className='opening-hours__sep'>|</span>
        <span className='opening-hours__days'>
          {restaurant === 'renmarkstorget-12'
            ? locale === 'en'
              ? 'Fri-Sat'
              : 'Fre-Lör'
            : str.sat}
        </span>
        <span className='opening-hours__period'>
          {checkClosed({
            string: openingHours[6],
            restaurant: restaurant,
            locale: locale,
          })}
        </span>
        <span className='opening-hours__sep'>|</span>
        <span className='opening-hours__days'>{str.sun}</span>
        <span className='opening-hours__period'>
          {checkClosed({
            string: openingHours[0],
            restaurant: this.props.restaurant,
            locale: locale,
          })}
        </span>
      </div>
    );
  }
}

OpeningHours.propTypes = {
  restaurant: React.PropTypes.string,
  locale: React.PropTypes.string,
  openingHours: React.PropTypes.array,
};

export default OpeningHours;
