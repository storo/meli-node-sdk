"use strict";

var chai = require('chai'),
    expect = chai.expect;

var meli = require('../');
var currency_id = 'ARS';

describe('Currency', function(){

  beforeEach(function(){
    require('./mocks/currency');
  });

  it('list', function(){
    return meli.currency.list().then(function(currencies){
      expect(currencies).to.have.length(14);
    });
  });

  it('get', function(){
    return meli.currency.get(currency_id).then(function(currency){
      expect(currency.id).equal(currency_id);
    });
  });

});
