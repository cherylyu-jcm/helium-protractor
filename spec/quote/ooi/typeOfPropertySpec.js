var LoginPage = require('./../../login/loginPage');
var StartPage = require('./../startPage');
var TypeOfPropertyPage = require('./typeOfPropertyPage');
var loginPage = new LoginPage();
var startPage = new StartPage();
var typeOfPropertyPage = new TypeOfPropertyPage();


describe('type of property page', function () {

  beforeAll(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    startPage.get();
    startPage.createNewPolicy();
  });

  it('should redirect to property details address page after form submitted', function() {
    typeOfPropertyPage.chooseTypeOfProperty();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/property-details-address');
  });

});

