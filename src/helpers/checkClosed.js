const checkClosed = ({string, restaurant, locale, deviation = false}) => {
    if (deviation) {
        // check for deviating opening hours i.e. holidays etc
        const date = new Date();
        const today = `${date.getUTCMonth() + 1}-${date.getUTCDate()}`; // "MM-DD"
        switch (restaurant) {
        case 'regeringsgatan-26':
            switch (today) {
            case '11-4':
                string = '10-17';
                break;
            case '7-17':
            case '7-18':
            case '7-19':
            case '7-20':
            case '7-21':
            case '7-23':
            case '7-24':
            case '7-25':
            case '7-26':
            case '7-27':
            case '7-28':
            case '7-30':
            case '7-31':
            case '8-1':
            case '8-2':
            case '8-3':
            case '8-5':
            case '8-6':
                string = '10-15';
                break;
            case '1-1':
            case '1-6':
            case '6-24':
            case '7-1':
            case '7-15':
            case '7-22':
            case '7-29':
            case '7-8':
            case '8-12':
            case '8-4':
            case '11-5':
            case '12-24':
            case '12-25':
            case '12-26':
            case '12-31':
            case '12-5':
                string = 'Closed';
                break;
            default:
                break;
            }
            break;
        case 'kungsbron-8':
            switch (today) {
            case '1-1':
            case '1-2':
            case '1-3':
            case '1-4':
            case '1-5':
            case '1-6':
            case '7-24':
            case '7-25':
            case '7-26':
            case '7-27':
            case '7-28':
            case '7-29':
            case '7-30':
            case '12-24':
            case '12-25':
            case '12-26':
            case '12-27':
            case '12-28':
            case '12-29':
            case '12-30':
            case '12-31':
                string = 'Closed';
                break;
            default:
                break;
            }
            break;
        case 'avion-shopping':
            switch (today) {
            case '11-5':
                string = '10-18';
                break;
            case '12-3':
            case '12-10':
                string = '09-19';
                break;
            case '12-17':
            case '12-18':
            case '12-19':
            case '12-20':
            case '12-21':
            case '12-22':
            case '12-23':
                string = '09-21';
                break;
            case '12-24':
            case '12-31':
            case '1-1':
                string = '10-15';
                break;
            case '12-25':
                string = 'Closed';
                break;
            case '12-26':
            case '1-6':
                string = '10-18';
                break;
            case '1-5':
                string = '10-20';
                break;
            default:
                break;
            }
            break;
        default:
            break;
        }
    }

    if (string === 'Closed' && locale === 'sv') return 'Stängt';
    return string;
};

export default checkClosed;
