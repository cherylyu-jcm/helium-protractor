var LoginPage = require('./../../login/loginPage');
var StartPage = require('./../startPage');
var TypeOfPropertyPage = require('./typeOfPropertyPage');
var PropertyDetailsAddressPage = require('./propertyDetailsAddressPage');
var loginPage = new LoginPage();
var startPage = new StartPage();
var typeOfPropertyPage = new TypeOfPropertyPage();
var propertyDetailsAddressPage = new PropertyDetailsAddressPage();


describe('property details address page', function () {

  beforeAll(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    startPage.createNewPolicy();
    typeOfPropertyPage.updateTypeOfProperty('House (Detached)');
  });

  it('should display the error messages when leaving required fields blank', function () {
    propertyDetailsAddressPage.updatePropertyDetailsAddress({});
    expect(propertyDetailsAddressPage.postcodeRequiredErrorMessage.getText()).toBe('Please provide postcode'); // TODO: test more messages
  });

  it('should display the error messages when inputting with invalid format', function () {
    propertyDetailsAddressPage.postcode.sendKeys('ABC 123');
    expect(propertyDetailsAddressPage.postcodePatternErrorMessage.getText()).toBe('Invalid postcode');
  });

  it('should build premise list after looking up address by postcode', function () {
    var options, lastOption;
    propertyDetailsAddressPage.lookupPostcode('TW7 4DS');
    options = propertyDetailsAddressPage.premise.all(by.tagName('option'));
    lastOption = options.last();
    expect(options.count()).toBeGreaterThan(1);
    expect(lastOption.getText()).toEqual('R G A Underwriting Ltd, Grove House 551, London Road');
  });

  it('should apply address pieces to corresponding fields after user choose one of the address from premise list', function () {
    var lastOption = propertyDetailsAddressPage.premise.all(by.tagName('option')).last();
    lastOption.click();
    expect(propertyDetailsAddressPage.line1.getAttribute('value')).toEqual('R G A Underwriting Ltd');
    expect(propertyDetailsAddressPage.line2.getAttribute('value')).toEqual('Grove House 551, London Road');
    expect(propertyDetailsAddressPage.town.getAttribute('value')).toEqual('Isleworth');
    expect(propertyDetailsAddressPage.county.getAttribute('value')).toEqual('Greater London');
    expect(propertyDetailsAddressPage.country.getAttribute('value')).toEqual('United Kingdom');
  });

  it('should redirect to property details building page after form submitted', function() {
    propertyDetailsAddressPage.updatePropertyDetailsAddress();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/property-details-building');
  });

});

