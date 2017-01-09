const checkClosed = ({string, restaurant, locale, deviation = false}) => {
    if (deviation) {
        // check for deviating opening hours i.e. holidays etc
        const date = new Date();
        const today = `${date.getUTCMonth() + 1}-${date.getUTCDate()}`; // "MM-DD"

        switch (restaurant) {
        case 'regeringsgatan-26':
            switch (today) {
            case '11-04':
                string = '10-17';
                break;
            case '11-05':
            case '12-24':
            case '12-25':
            case '12-26':
            case '12-31':
            case '1-1':
            case '1-6':
                string = 'Closed';
                break;
            case '12-05':
                string = 'Closed';
                break;
            default:
                break;
            }
            break;
        case 'kungsbron-8':
            switch (today) {
            case '12-24':
            case '12-25':
            case '12-26':
            case '12-27':
            case '12-28':
            case '12-29':
            case '12-30':
            case '12-31':
            case '1-1':
            case '1-2':
            case '1-3':
            case '1-4':
            case '1-5':
            case '1-6':
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
