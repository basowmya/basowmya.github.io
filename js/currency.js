/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import numeral from 'numeral';

// load a language
numeral.language('in', {
    delimiters: {
        thousands: ','
    },
    currency: {
        symbol: 'Rs.'
    }
});

// switch between languages
numeral.language('in');

export default num => numeral(num).format('$ 0,0');
