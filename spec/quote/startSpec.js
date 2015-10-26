var LoginPage = require('./../login/loginPage');
var StartPage = require('./startPage');
var loginPage = new LoginPage();
var startPage = new StartPage();


describe('start quote page', function () {

  var policyTypeOptions = element.all(by.css('.policy-type-block'));

  beforeAll(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    startPage.get();
  });

  it('should have correct length of policy type options', function () {
    expect(policyTypeOptions.count()).toBe(6);
  });

  it('should display the error messages when leave required fields blank', function () {
    startPage.createNewPolicy({});
    expect(startPage.policyTypeRequiredErrorMessage.getText()).toBe('Please provide policy type'); // TODO: test more messages
  });

  it('should display the error message when input with invalid format', function () {
    startPage.firstName.sendKeys(007);
    element(by.css('body')).click(); // make a blur
    expect(startPage.firstNamePatternErrorMessage.getText()).toBe('Invalid first name'); // TODO: test more messages
  });

  it('should highlight policy type when select the option', function () {
    policyTypeOptions.get(1).click().then(function () {
      var typeName = element(by.css('.policy-type-block.active h3')).getText();
      expect(typeName).toBe('Owner Occupier Insurance');
    });
  });

  it('should show company fields if is company', function () {
    startPage.selectIsCompany(true);
    expect(startPage.companyName.isDisplayed()).toBe(true);
  });

  it('should show field to input other title', function () {
    startPage.title.sendKeys('Other');
    element(by.css('body')).click();
    expect(startPage.otherTitle.isDisplayed()).toBe(true);
  });

  it('should redirect to type of property page after form submitted', function() {
    startPage.get(); // refresh the page
    startPage.createNewPolicy();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/type-of-property');
  });

});

