'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Hotel = require('../components/Hotel');
const Tax = require('../components/tax');
const DayType = require('../enums/dayType');
const ClientType = require('../enums/clientType');
const hotelMock = require('./hotelMock');
const Serch = require('../components/Search');
const fetchMock = require('fetch-mock');

describe('Hotel ->', function () {
  const hotel1 = new Hotel();

  it('Should have a classification property', function () {
    hotel1.classification = 1;
    expect(hotel1.classification).to.equal(1);
  });

  it('Should have a name property', function () {
    hotel1.name = hotelMock[0].name;
    expect(hotel1.name).to.equal(hotelMock[0].name);
  });

  it('Taxes should be an array', function () {
    assert.typeOf(hotel1.taxes, 'Array');
  });

  it('Should have taxes', function () {
    hotel1.addTaxes(hotelMock[0].taxes);
    expect(JSON.stringify(hotel1.taxes)).to.equal(JSON.stringify(hotelMock[0].taxes));
  });
});

describe('Tax ->', function () {
  const tax1 = new Tax('weekday', ClientType.regular, 110);

  it('should have a typeDay', function () {
    expect(tax1.typeDay).to.equal(DayType.weekday);
  });

  it('should have a typeClient', function () {
    expect(tax1.typeClient).to.equal(ClientType.regular);
  });

  it('should have a valor', function () {
    expect(tax1.valor).to.equal(110);
  });
});

describe('Search ->', function () {
  const search = new Serch();

  before(() =>{
    fetchMock.get('/hotels', hotelMock);
  });

  it('Should get hotels by api ', function () {
    search.getHotels()
    .then( reponse => {
      expect(search.hotels).to.length(hotelMock.length);
    })
  });

  it('Should ', function () {
    
  });
});
