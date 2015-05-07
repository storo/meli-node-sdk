"use strict";

var configuration = require('./config');
var api = require('./api');

module.exports = function(){
  return {
    configuration: configuration.default_options,
    version: configuration.sdkVersion,
    currency: require('./resources/Currency')(),
    currencyConversions: require('./resources/CurrencyConversions')()
  };
};
