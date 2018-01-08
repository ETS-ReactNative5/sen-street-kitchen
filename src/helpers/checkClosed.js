const checkClosed = ({string, restaurant, locale, deviation = false}) => {
    if (deviation) {
        // check for deviating opening hours i.e. holidays etc
        const date = new Date();
        const today = `${date.getUTCMonth() + 1}-${date.getUTCDate()}`; // "MM-DD"
        switch (restaurant) {
        case 'regeringsgatan-26':
            switch (today) {
            case '12-27':
            case '12-28':
            case '12-29':
                string = '11-15';
                break;
            case '12-30':
            case '1-1':
            case '1-6':
            case '1-7':
                string = 'Closed';
                break;
            default:
                break;
            }
            break;
        case 'kungsbron-8':
            switch (today) {
            case '12-23':
            case '12-24':
            case '12-25':
            case '12-26':
            case '12-27':
            case '12-28':
            case '12-29':
            case '12-30':
            case '12-31':
            case '1-1':
                string = 'Closed';
                break;
            case '1-2':
            case '1-3':
            case '1-4':
            case '1-5':
                string = '11-15';
                break;
            default:
                break;
            }
            break;
        case 'avion-shopping':
            switch (today) {
            case '1-1':
                string = '10-15';
                break;
            case '1-5':
                string = '10-20';
                break;
            case '1-6':
                string = '10-18';
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
