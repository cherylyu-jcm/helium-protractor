var StartPage = function () {

  this.policyType = element(by.model('$parent.policyType'));
  this.isCompany = element(by.model('isCompany'));
  this.companyName = element(by.model('companyName'));
  this.isLimitedCompany = element(by.model('isLimitedCompany'));
  this.title = element(by.model('title'));
  this.otherTitle = element(by.model('otherTitle'));
  this.firstName = element(by.model('firstName'));
  this.lastName = element(by.model('lastName'));
  this.contactNumber = element(by.model('contactNumber'));
  this.email = element(by.model('email'));
  this.policyTypeErrorMessage = element(by.xpath('//*[@id="panel-policy-types"]/div[2]/div/span'));
  this.submitBtn = element(by.css('button[type=submit]'));

  this.normalFormData = {
    policyType: 'OWNER_OCCUPIER',
    isCompany: false,
    companyName: '',
    isLimitedCompany: '',
    title: 'Mr',
    firstName: 'Harry',
    lastName: 'Potter',
    contactNumber: '+44 (0) 20 8587 1908 ext. 768',
    email: 'harry.potter@jcmanagement.com.tw',
    dateOfBirth: '24/10/1969'
  };


  this.get = function () {
    browser.get('/');
  };

  this.createNewPolicy = function (formData) {
    if (!formData) formData = this.normalFormData;
    this.policyType.sendKeys(formData.policyType);
    this.isCompany.sendKeys(formData.isCompany);
    this.title.sendKeys(formData.title);
    this.firstName.sendKeys(formData.firstName);
    this.lastName.sendKeys(formData.lastName);
    this.contactNumber.sendKeys(formData.contactNumber);
    this.email.sendKeys(formData.email);
    this.submitBtn.click();
    browser.waitForAngular();
  };

};

module.exports = StartPage;
