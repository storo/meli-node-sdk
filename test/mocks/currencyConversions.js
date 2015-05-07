var nock = require('nock');

var responseBody = {
  "ratio": 611.89,
  "mercado_pago_ratio": 589.897
};

var badDateResponseBody = {
  "message": "Invalid date format (01/01/2015). Example: 07/05/2015-00:44",
  "error": "bad_request",
  "status": 400,
  "cause": null
};

var invalidCurrencyResponseBody = {
  "message": "Currency conversion not found from USD to ASDF",
  "error": "not_found",
  "status": 404,
  "cause": null
};

var dateResponseBody = {
  "ratio": 607.38,
  "mercado_pago_ratio": 589.897
};

nock('https://api.mercadolibre.com')
  .get('/currency_conversions/search?from=USD&to=CLP')
  .reply(200, responseBody);

nock('https://api.mercadolibre.com')
  .get('/currency_conversions/search?from=USD&to=ASDF')
  .reply(404, invalidCurrencyResponseBody);

nock('https://api.mercadolibre.com')
  .get('/currency_conversions/search?from=USD&to=CLP&date=01/01/2015')
  .reply(400, badDateResponseBody);

nock('https://api.mercadolibre.com')
  .get('/currency_conversions/search?from=USD&to=CLP&date=01/01/2015-00:00')
  .reply(200, dateResponseBody);
