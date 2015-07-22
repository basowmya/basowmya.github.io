/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var numeral = require('numeral');

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

var currency = function (num) {
  return numeral(num).format('$ 0,0');
};

module.exports = currency;
