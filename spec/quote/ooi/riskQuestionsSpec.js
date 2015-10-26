var LoginPage = require('./../../login/loginPage');
var StartPage = require('./../startPage');
var RiskQuestionsPage = require('./riskQuestionsPage');
var loginPage = new LoginPage();
var startPage = new StartPage();
var riskQuestionsPage = new RiskQuestionsPage();

describe('Risk questions with FCA Agnet', function() {

  beforeAll(function() {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    startPage.createNewPolicy();
  });

  beforeEach(function() {
    riskQuestionsPage.get();
  });

  it('should answer all questions when click allOk button', function() {
    riskQuestionsPage.allOkBtn.click();
    expect(element.all(by.repeater('riskQuestion in riskQuestions')).length ).toEqual(element.all(by.css('input[checked]')).length);
  });

  it('should checked confirm box', function() {
    riskQuestionsPage.confirmBox.click();
    expect(riskQuestionsPage.confirmBox).toBeTruthy();
  });

  it('should redirect to policy holder page after all questions answered and for submitted', function() {
    riskQuestionsPage.allOkBtn.click();
    riskQuestionsPage.confirmBox.click();
    riskQuestionsPage.submitBtn.click();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/policyholder');
  });

  it('should display refer box when didnt answer defaul answers', function() {
    riskQuestionsPage.answerAllQuestionsToYes();
    riskQuestionsPage.confirmBox.click();
    riskQuestionsPage.submitBtn.click();
    expect(riskQuestionsPage.referBox.isPresent()).toBeTruthy();
  });

  // TODO: unfinish
  it('should show class:rejected when selected non-default answer', function() {
    riskQuestionsPage.answerAllQuestionsToYes();
    // expect css.reject.length > 0
  });

  it('should display alert box when leave confirm box empty', function() {
    riskQuestionsPage.allOkBtn.click();
    riskQuestionsPage.submitBtn.click();
    expect(riskQuestionsPage.sweetAlert.isPresent()).toBeTruthy();

  });

});

describe('Risk questions with non-fca agnet', function() {

  beforeAll(function() {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000'); // TODO: Please change login info a non-fca anget after testing on sit server
    startPage.createNewPolicy();
  });

  beforeEach(function() {
    riskQuestionsPage.get();
  });

  it('should not dispaly allOk button if agent was non-fca agent', function() {
    expect(riskQuestionsPage.allOkBtn.isDisplayed()).toBeFalsy();
  });

});
