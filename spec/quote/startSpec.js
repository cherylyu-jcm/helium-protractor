var LoginPage = require('../login/loginPage');
var StartPage = require('./startPage');
var loginPage = new LoginPage();
var startPage = new StartPage();


describe('start', function () {
  beforeEach(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    startPage.get();
  });

  var policyTypeOptions = element.all(by.css('.policy-type-block'));

  it('should have correct length of policy type options', function () {
    expect(policyTypeOptions.count()).toBe(6);
  });

  it('should highlight policy type when select the option', function () {
    policyTypeOptions.get(1).click().then(function () {
      var typeName = element(by.css('.policy-type-block.active h3')).getText();
      expect(typeName).toBe('Owner Occupier Insurance');
    });
  });

  it('should display the error messages when leave required fields blank', function () {
    startPage.createNewPolicy({});
    expect(startPage.policyTypeErrorMessage.getText()).toBe('Please provide policy type'); // TODO: test more messages
  });

  xit('should show company fields if is company', function () {
    var formData = {
      isCompany: true
    };
    startPage.createNewPolicy(formData);
    expect(startPage.companyName.isDisplayed()).toBe(true); // TODO: make the selector more accurate
  });

  it('should show field to input other title', function () {
    var formData = {
      title: 'Other'
    };
    startPage.createNewPolicy(formData);
    expect(startPage.otherTitle.isDisplayed()).toBe(true);
  });

  xit('should redirect to type of property page after form submitted', function() {
    startPage.createNewPolicy();
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/quote/ooi/type-of-property'); // TODO: do not know why it didn't submit
  });

});

