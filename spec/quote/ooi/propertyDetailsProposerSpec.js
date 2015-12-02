var LoginPage = require('./../../login/loginPage');
var StartPage = require('./../startPage');
var TypeOfPropertyPage = require('./typeOfPropertyPage');
var PropertyDetailsAddressPage = require('./propertyDetailsAddressPage');
var PropertyDetailsBuildingPage = require('./propertyDetailsBuildingPage');
var PropertyDetailsProposerPage = require('./propertyDetailsProposerPage');
var loginPage = new LoginPage();
var startPage = new StartPage();
var typeOfPropertyPage = new TypeOfPropertyPage();
var propertyDetailsAddressPage = new PropertyDetailsAddressPage();
var propertyDetailsBuildingPage = new PropertyDetailsBuildingPage();
var page = new PropertyDetailsProposerPage();


describe('property details proposer & property page', function () {

  beforeAll(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    // startPage.createNewPolicy();
    // typeOfPropertyPage.updateTypeOfProperty('House (Detached)');
    // propertyDetailsAddressPage.updatePropertyDetailsAddress();
    // propertyDetailsBuildingPage.updatePropertyDetailsBuilding();
    browser.get('/quote/ooi/property-details-proposer/N1510000061');
  });

  it('should display the error messages when leaving required fields blank', function () {
    page.updatePropertyDetailsProposer({});
    expect(page.isFirstTimeBuyerRequiredErrorMessage.getText()).toBe('Is the proposer a first time buyer?'); // TODO: test more messages
  });

  it('should auto format at currency fields', function () {
    page.buildingSumInsured.sendKeys(2015);
    expect(page.buildingSumInsured.getText()).toEqual('20.15');
    browser.pause()
  });

  it('should redirect to multi-quote page after form submitted', function() {
    // page.updatePropertyDetailsProposer();
    // expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/multi-quote');
  });

});

