var PropertyDetailsProposerPage = function () {

  // inputs
  this.isFirstTimeBuyer = element.all(by.model('isFirstTimeBuyer'));
  this.buildingSumInsured = element(by.model('buildingSumInsured'));
  this.submitBtn = element(by.css('button[type=submit]'));

  // error messages
  this.isFirstTimeBuyerRequiredErrorMessage = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[1]/div/div[1]/div/span'));

  // data
  this.testingFormData = {
    isFirstTimeBuyer: true,
    dateOfBirth: '24/10/1969',
    buildingSumInsured: 100000,
    isBuildingAccidentalDamage: false,
    noBuildingClaimYears: 1,
    contentsSumInsured: 10000,
    isContentsAccidentalDamage: false,
    personalPossessionsSumInsured: 0,
    policyHolderType: 'PERSONAL'
  };


  this.updatePropertyDetailsProposer = function (formData) {
    if (!formData) formData = this.testingFormData;


    this.submitBtn.click();
    browser.waitForAngular();
  };

};

module.exports = PropertyDetailsProposerPage;
