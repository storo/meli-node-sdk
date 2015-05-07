"use strict";

var api = require('./api');

function mix(_object, operations) {
  operations.forEach(function (property) {
    _object[property] = actions[property];
  });
  return _object;
}

var actions = {
  get: function(id, config){
    return api.executeHttp('GET', this.baseUrl + id, {}, config);
  }
};

exports.mix = mix;
