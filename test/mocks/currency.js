var nock = require('nock');

var responseBody = [
  {
    "id":"ARS",
    "description":"Peso argentino",
    "symbol":"$",
    "decimal_places":2
  },
  {
    "id":"BRL",
    "description":"Real",
    "symbol":"R$",
    "decimal_places":2
  },{
    "id":"CLF",
    "description":"Unidad de Fomento",
    "symbol":"UF",
    "decimal_places":2
  },
  {
    "id":"CLP",
    "description":"Peso Chileno",
    "symbol":"$",
    "decimal_places":0
  },
  {
    "id":"COP",
    "description":"Peso colombiano",
    "symbol":"$",
    "decimal_places":0
  },
  {
    "id":"CRC",
    "description":"Colones",
    "symbol":"¢",
    "decimal_places":2
  },
  {
    "id":"DOP",
    "description":"Peso Dominicano",
    "symbol":"$",
    "decimal_places":2
  },
  {
    "id":"EUR",
    "description":"Euro",
    "symbol":"€",
    "decimal_places":2
  },
  {
    "id":"MXN",
    "description":"Peso Mexicano",
    "symbol":"$",
    "decimal_places":2
  },
  {
    "id":"PAB",
    "description":"Balboa",
    "symbol":"B/.",
    "decimal_places":2
  },
  {
    "id":"PEN",
    "description":"Soles",
    "symbol":"S/.",
    "decimal_places":2
  },
  {
    "id":"USD",
    "description":"Dolar",
    "symbol":"U$S",
    "decimal_places":2
  },
  {
    "id":"UYU",
    "description":"Peso Uruguayo",
    "symbol":"$",
    "decimal_places":2
  },
  {
    "id":"VEF",
    "description":"Bolivar fuerte",
    "symbol":"Bs.",
    "decimal_places":2
  }
];

nock('https://api.mercadolibre.com')
  .get('/currencies/')
  .reply(200, responseBody);

nock('https://api.mercadolibre.com')
  .get('/currencies/ARS')
  .reply(200, responseBody[0]);
