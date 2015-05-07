"use strict";

var chai = require('chai'),
    expect = chai.expect;
var meli = require('../');

describe('meliSDK', function(){
  describe('CurrencyConversions', function(){

    beforeEach(function(){
      require('./mocks/currencyConversions');
    });

    it('search', function(){
      return meli.currencyConversions.search('USD','CLP').then(function(conversion){
        expect(conversion).to.have.property('ratio');
        expect(conversion).to.have.property('mercado_pago_ratio');
      });
    });

    it('search with invalid currency', function(){
      return meli.currencyConversions.search('USD','ASDF').then(function(conversion){
        expect(conversion.status).to.be.equal(404);
      });
    });

    it('search with bad format date', function(){
      return meli.currencyConversions.search('USD','CLP', '01/01/2015').then(function(conversion){
        expect(conversion.status).to.be.equal(400);
      });
    });

    it('search with date', function(){
      return meli.currencyConversions.search('USD','CLP', '01/01/2015-00:00').then(function(conversion){
        expect(conversion).to.have.property('ratio');
        expect(conversion).to.have.property('mercado_pago_ratio');
      });
    });

  });
});
