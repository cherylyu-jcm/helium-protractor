var PropertyDetailsAddressPage = function () {

  // inputs
  this.postcode = element(by.model('postcode'));
  this.premise = element(by.model('premise'));
  this.line1 = element(by.model('line1'));
  this.line2 = element(by.model('line2'));
  this.town = element(by.model('town'));
  this.county = element(by.model('county'));
  this.country = element(by.model('country'));
  this.findAddressBtn = element(by.buttonText('Find Address'));
  this.submitBtn = element(by.css('button[type=submit]'));

  // error messages
  this.postcodeRequiredErrorMessage = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div[1]/span[1]'));
  this.postcodePatternErrorMessage = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div[1]/span[2]'));

  // data
  this.testingFormData = {
    postcode: 'TW7 4DS',
    line1:    'R G A Underwriting Ltd',
    line2:    'Grove House 551, London Road',
    town:     'Isleworth',
    county:   'Greater London',
    country:  'United Kingdom'
  };


  this.lookupPostcode = function (postcode) {
    this.postcode.clear();
    this.postcode.sendKeys(postcode);
    this.findAddressBtn.click();
    browser.waitForAngular();
  };

  this.updatePropertyDetailsAddress = function (formData) {
    if (!formData) formData = this.testingFormData;

    if (formData.postcode) this.postcode.sendKeys(formData.postcode);
    if (formData.line1) this.line1.sendKeys(formData.line1);
    if (formData.line2) this.line2.sendKeys(formData.line2);
    if (formData.town) this.town.sendKeys(formData.town);
    if (formData.county) this.county.sendKeys(formData.county);
    if (formData.country) this.country.sendKeys(formData.country);

    this.submitBtn.click();
    browser.waitForAngular();
  };

};

module.exports = PropertyDetailsAddressPage;
