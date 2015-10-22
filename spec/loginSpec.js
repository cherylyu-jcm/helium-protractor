var loginPage = new loginPage();

beforeEach(function() {
  loginPage.get();
});

describe('login', function() {

  describe('success', function() {
    it('should redirect to start quote page after form submitted', function() {
      loginPage.login('test@rentguard.co.uk', '000000');
      expect(browser.getCurrentUrl()).toBe('http://sit.raamsys.co.uk/'); // TODO: to test if it redirect to start quote page
      expect(element(by.binding('name')).getText()).toBe('Test FCA Agent');
    });
  });

  describe('failure', function() {
    it('should see the error message due to empty email and password', function() {
      loginPage.login('', '');
      expect(loginPage.getEmailErrorMessage()).toBe('Email is required');
      expect(loginPage.getPasswordErrorMessage()).toBe('Password is required');
    });

    it('should see the error message due to unregistered email', function() {
      loginPage.login('rocky.chen@rentguard.co.uk', '000000');
      expect(loginPage.getErrorMessage()).toContain('Invalid email or password (0x003001:');
    });

    it('should see the error message due to wrong password', function() {
      loginPage.login('test@rentguard.co.uk', '111111');
      expect(loginPage.getErrorMessage()).toContain('Invalid email or password (0x003002:');
    });
  });

});

