var StartPage = function () {

  // inputs
  this.isCompany = element.all(by.model('isCompany')).get(0);
  this.isNotCompany = element.all(by.model('isCompany')).get(1);
  this.companyName = element(by.model('companyName'));
  this.isLimitedCompany = element(by.model('isLimitedCompany'));
  this.title = element(by.model('title'));
  this.otherTitle = element(by.model('otherTitle'));
  this.firstName = element(by.model('firstName'));
  this.lastName = element(by.model('lastName'));
  this.contactNumber = element(by.model('contactNumber'));
  this.email = element(by.model('email'));
  this.submitBtn = element(by.css('button[type=submit]'));

  // error messages
  this.policyTypeRequiredErrorMessage = element(by.xpath('//*[@id="panel-policy-types"]/div[2]/div/span'));
  this.firstNamePatternErrorMessage = element(by.xpath('//*[@id="panel-contact-details"]/div[2]/div[5]/div[1]/div/span[2]'));

  // data
  this.policyTypeOptions = [
    'LANDLOARD_HOUSEHOLDER',
    'OWNER_OCCUPIER',
    'COMMERCIAL_PROPERTY',
    'TENANTS_CONTENTS',
    'LERG_EXPENSES',
    'COMMERCIAL_COMBINED'
  ];
  this.testingFormData = {
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
    if (!formData) formData = this.testingFormData;

    if (formData.policyType) this.choosePolicyType(formData.policyType);
    if (formData.isCompany) this.selectIsCompany(formData.isCompany);
    if (formData.title) this.title.sendKeys(formData.title);
    if (formData.firstName) this.firstName.sendKeys(formData.firstName);
    if (formData.lastName) this.lastName.sendKeys(formData.lastName);
    if (formData.contactNumber) this.contactNumber.sendKeys(formData.contactNumber);
    if (formData.email) this.email.sendKeys(formData.email);

    this.submitBtn.click();
    browser.waitForAngular();
  };

  this.choosePolicyType = function (policyType) {
    var index = this.policyTypeOptions.indexOf(policyType);
    var option = element(by.repeater('option in policyTypes').row(index));
    option.click();
  };

  this.selectIsCompany = function (isCompany) {
    if (isCompany) {
      this.isCompany.click();
    } else {
      this.isNotCompany.click();
    }
  };

};

module.exports = StartPage;
