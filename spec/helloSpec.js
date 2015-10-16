beforeEach(function() {
  browser.get('/');
});

describe('hello protractor', function() {

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Online Quote');
  });

});

describe('login', function() {

  var email = element(by.model('email'));
  var password = element(by.model('password'));
  var submitBtn = element(by.css('button[type=submit]'));

  it('should redirect to start quote page after form submitted', function() {
    email.sendKeys('test@rentguard.co.uk');
    password.sendKeys('000000');
    submitBtn.click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toBe('http://sit.raamsys.co.uk/'); // TODO: to test if it redirect to start quote page
    // browser.wait(element(by.css('#panel-policy-types')).isPresent);
    // expect(element(by.css('#panel-policy-types')).isPresent).toBe(true);
  });

});
