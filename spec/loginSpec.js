beforeEach(function() {
  browser.driver.manage().deleteAllCookies();
  browser.get('/login');
});

describe('login', function() {

  var email = element(by.model('email'));
  var password = element(by.model('password'));
  var submitBtn = element(by.css('button[type=submit]'));

  describe('success', function() {
    it('should redirect to start quote page after form submitted', function() {
      email.sendKeys('test@rentguard.co.uk');
      password.sendKeys('000000');
      submitBtn.click();
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe('http://sit.raamsys.co.uk/'); // TODO: to test if it redirect to start quote page
      expect(element(by.binding('name')).getText()).toBe('Test FCA Agent');
    });
  });

  describe('failure', function() {
    it('should see the error message due to empty email and password', function() {
      email.sendKeys('');
      password.sendKeys('');
      submitBtn.click();
      browser.waitForAngular();
      expect(element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[1]/span[2]')).getText()).toBe('Email is required');
      expect(element(by.xpath('//*[@id="main"]/div/div/div/div/div/div/form/div[2]/span[2]')).getText()).toBe('Password is required');
    });

    it('should see the error message due to unregistered email', function() {
      email.sendKeys('rocky.chen@rentguard.co.uk');
      password.sendKeys('000000');
      submitBtn.click();
      browser.waitForAngular();
      expect(element(by.binding('alert.msg')).getText()).toContain('Invalid email or password (0x003001:');
    });

    it('should see the error message due to wrong password', function() {
      email.sendKeys('test@rentguard.co.uk');
      password.sendKeys('111111');
      submitBtn.click();
      browser.waitForAngular();
      expect(element(by.binding('alert.msg')).getText()).toContain('Invalid email or password (0x003002:');
    });
  });

});

