var LoginPage = function() {

  this.email = element(by.model('email'));
  this.password = element(by.model('password'));
  this.submitBtn = element(by.css('button[type=submit]'));
  this.errorMessage = element(by.binding('alert.msg'));
  this.emailErrorMessage = element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[1]/span[2]'));
  this.passwordErrorMessage = element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[2]/span[2]'));

  this.get = function() {
    browser.driver.manage().window().maximize();
    browser.driver.manage().deleteAllCookies();
    browser.get('/login');
  };

  this.login = function(email, password) {
    this.email.sendKeys(email);
    this.password.sendKeys(password);
    this.submitBtn.click();
    browser.waitForAngular();
  };

  this.getErrorMessage = function() {
    return this.errorMessage.getText();
  };

  this.getEmailErrorMessage = function() {
    return this.emailErrorMessage.getText();
  };

  this.getPasswordErrorMessage = function() {
    return this.passwordErrorMessage.getText();
  };

};

module.exports = LoginPage;
