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
    startPage.createNewPolicy();
  });

  it('should display the error message when user didn\'t choose any type of property', function () {
    typeOfPropertyPage.updateTypeOfProperty(null);
    expect(typeOfPropertyPage.typeOfPropertyRequiredErrorMessage.getText()).toBe('Please provide type of property');
  });

  it('should highlight group icon when user click any option of that group', function () {
    var activedBadge = typeOfPropertyPage.groupBungalow.element(by.css('.group-badge'));
    typeOfPropertyPage.chooseTypeOfProperty('Bungalow (Detached)');
    expect(activedBadge.getAttribute('class')).toMatch('active');
  });

  it('should auto select the first option when user click the group icon', function () {
    var activedBadge = typeOfPropertyPage.groupHouse.element(by.css('.group-badge'));
    var firstOptionOfHouse = typeOfPropertyPage.options.get(0);
    activedBadge.click();
    expect(firstOptionOfHouse.getAttribute('checked')).toBeTruthy();
  });

  it('should redirect to property details address page after form submitted', function() {
    typeOfPropertyPage.updateTypeOfProperty('House (Detached)');
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/property-details-address');
  });

});

