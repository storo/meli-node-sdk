"use strict";

var rc = require('./restClient');
var config = require('./config');

function executeHttp(http_method, path, data, http_options) {
  if (typeof http_options === "undefined") {
    http_options = null;
  }
  //if (!http_options) {
  http_options = config.default_options;
  //} else {
    //http_options = utils.merge(http_options, configuration.default_options);
  //}

  return rc.invoke(http_method, path, data, http_options);
}

exports.executeHttp  = executeHttp;
