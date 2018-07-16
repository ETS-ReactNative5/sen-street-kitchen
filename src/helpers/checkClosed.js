const checkClosed = ({ string, restaurant, locale, deviation = false }) => {
    if (deviation) {
        // check for deviating opening hours i.e. holidays etc
        const date = new Date();
        const today = `${date.getUTCMonth() + 1}-${date.getUTCDate()}`; // "MM-DD"
        switch (restaurant) {
        case 'regeringsgatan-26':
            switch (today) {
                    // v28
            case '7-9':
            case '7-10':
            case '7-11':
            case '7-12':
            case '7-13':
                    // v29
            case '7-16':
            case '7-17':
            case '7-18':
            case '7-19':
            case '7-20':
                    // v30
            case '7-23':
            case '7-24':
            case '7-25':
            case '7-26':
            case '7-27':
                    // v31
            case '7-30':
            case '7-31':
            case '8-1':
            case '8-2':
            case '8-3':
                string = '10-15';
                break;
            default:
                break;
            }
            break;
        case 'kungsbron-8':
            switch (today) {
                    // v30
            case '7-23':
            case '7-24':
            case '7-25':
            case '7-26':
            case '7-27':
                string = '10-15';
                break;
            default:
                break;
            }
            break;
        case 'avion-shopping':
            switch (today) {
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
