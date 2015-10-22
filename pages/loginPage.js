var loginPage = function() {

  var email = element(by.model('email'));
  var password = element(by.model('password'));
  var submitBtn = element(by.css('button[type=submit]'));
  var errorMessage = element(by.binding('alert.msg'));
  var emailErrorMessage = element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[1]/span[2]'));
  var passwordErrorMessage = element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[2]/span[2]'));

  this.get = function() {
    browser.driver.manage().deleteAllCookies();
    browser.get('/login');
  };

  this.login = function(email, password) {
    email.sendKeys(email);
    password.sendKeys(password);
    submitBtn.click();
    browser.waitForAngular();
  };

  this.getErrorMessage = function() {
    return errorMessage.getText();
  };

  this.getEmailErrorMessage = function() {
    return emailErrorMessage.getText();
  };

  this.getPasswordErrorMessage = function() {
    return passwordErrorMessage.getText();
  };

};