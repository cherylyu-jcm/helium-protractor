var TypeOfPropertyPage = function () {

  // inputs
  this.groups = element(by.repeater('buildingTypeGroup in buildingTypeGroups'));
  this.groupHouse = element(by.repeater('buildingTypeGroup in buildingTypeGroups').row(0));
  this.groupBungalow = element(by.repeater('buildingTypeGroup in buildingTypeGroups').row(2));
  this.options = element.all(by.model('$parent.$parent.typeOfProperty'));
  this.submitBtn = element(by.css('button[type=submit]'));

  // error messages
  this.typeOfPropertyRequiredErrorMessage = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[7]/span'));


  this.chooseTypeOfProperty = function (typeOfProperty) {
    this.options.each(function(option, index) {
      var target = option.getAttribute('value').then(function(val) {
        if (val === typeOfProperty) {
          option.click();
        }
      });
    });
  };

  this.updateTypeOfProperty = function (typeOfProperty) {
    if (typeOfProperty) {
      this.chooseTypeOfProperty(typeOfProperty);
    }
    this.submitBtn.click();
    browser.waitForAngular();
  };

};

module.exports = TypeOfPropertyPage;
