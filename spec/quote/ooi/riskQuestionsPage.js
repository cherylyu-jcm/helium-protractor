var riskQuestionsPage = function() {

  this.riskQuestions = element.all(by.repeater('riskQuestion in riskQuestions'));

  this.allOkBtn = element(by.id('allOk'));
  this.referBox = element(by.id('referBoxModal'));
  this.sweetAlert = element(by.css('.sweet-alert'));
  this.confirmBox = element(by.model('confirm'));
  this.submitBtn = element(by.css('button[type=submit]'));
  this.form = element(by.css('form'));

  this.get = function() {
    browser.get('/quote/ooi/risk-questions/N20000011');
  };

  this.answerAllQuestionsToYes = function() {
    element.all(by.css('input[ng-value=true]')).click();
  };

  this.answerAllQuestionsToNo = function() {
    element.all(by.css('input[ng-value=false]')).click();
  };

  this.answerAllQuestions = function() {
    this.riskQuestions.each(function(question, index) {
      question.findElement(By.css('input[ng-value=true]')).click();
    });
  };
};

module.exports = riskQuestionsPage;
