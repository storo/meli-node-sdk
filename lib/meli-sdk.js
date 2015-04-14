"use strict";

var configuration = require('./config');

module.exports = function(){
  function config(options){

  }

  return {
    config: config,
    configuration: configuration.default_options,
    version: configuration.sdkVersion
  };

};
