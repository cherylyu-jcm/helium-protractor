var PropertyDetailsBuildingPage = function () {

  // inputs
  this.bedroomNumber = element(by.model('bedroomNumber'));
  this.buildingYear = element(by.model('buildingYear'));
  this.buildingType = element(by.model('buildingType'));
  this.listedBuilding = element(by.model('listedBuilding'));
  this.floorConstruction = element(by.model('floorConstruction'));

  this.wallConstrMaterial = element(by.model('wallConstrMaterial'));
  this.otherWallConstrMaterial = element(by.model('otherWallConstrMaterial'));
  this.wallConstrPercentage = element(by.model('wallConstrPercentage'));
  this.wallConstrAddBtn = element.all(by.buttonText('Add')).get(0);
  this.wallConstructions = element.all(by.repeater('wallConstruction in wallConstructions'));

  this.flatRoofConstrMaterial = element(by.model('flatRoofConstrMaterial'));
  this.otherFlatRoofConstrMaterial = element(by.model('otherFlatRoofConstrMaterial'));
  this.flatRoofConstrPercentage = element(by.model('flatRoofConstrPercentage'));
  this.flatRoofConstrAddBtn = element.all(by.buttonText('Add')).get(1);
  this.flatRoofConstructions = element.all(by.repeater('flatRoofConstruction in flatRoofConstructions'));

  this.nonFlatRoofConstrMaterial = element(by.model('nonFlatRoofConstrMaterial'));
  this.otherNonFlatRoofConstrMaterial = element(by.model('otherNonFlatRoofConstrMaterial'));
  this.nonFlatRoofConstrPercentage = element(by.model('nonFlatRoofConstrPercentage'));
  this.nonFlatRoofConstrAddBtn = element.all(by.buttonText('Add')).get(2);
  this.nonFlatRoofConstructions = element.all(by.repeater('nonFlatRoofConstruction in nonFlatRoofConstructions'));

  this.flatRoofPercentage = element(by.model('flatRoofPercentage'));
  this.flatRoofSliderHandle = element(by.css('.min-slider-handle'));

  this.hasDoorLock = element.all(by.model('hasDoorLock'));
  this.hasWindowLock = element.all(by.model('hasWindowLock'));
  this.alarmSystem = element(by.model('alarmSystem'));
  this.flatRoofLabel = element(by.css('.slider-group')).$('.left-label');
  this.nonFlatRoofLabel = element(by.css('.slider-group')).$('.right-label');
  this.flatRoofTable = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[8]/div'));
  this.nonFlatRoofTable = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[9]/div'));
  this.submitBtn = element(by.css('button[type=submit]'));

  // error messages
  this.bedroomNumberRequiredErrorMessage = element(by.xpath('//*[@id="main"]/div[2]/div/div/div/ui-view/form/div[1]/div[2]/div[2]/div/div/div[1]/div/div/span'));

  // data
  this.testingFormData = {
    bedroomNumber: 1,
    buildingYear: 2015,
    buildingType: 'House (Unspecified)',
    listedBuilding: 'Grade I / Scottish A / NI A',
    floorConstruction: 'Concrete',
    wallConstructions: [
      {
        'material': 'Asbestos',
        'percentage': 90
      },
      {
        'material': 'Brick',
        'percentage': 10
      }
    ],
    flatRoofPercentage: 40,
    roofConstructions: [
      {
        'material': 'Concrete',
        'percentage': 40,
        'isFlat': true
      },
      {
        'material': 'Fibreglass',
        'percentage': 60,
        'isFlat': false
      }
    ],
    hasDoorLock: true,
    hasWindowLock: false,
    alarmSystem: 'BT Redcare'
  };


  this.dragFlatRoofSlider = function (percentage) {
    var distanceX = percentage * 2.5; // TODO: try to get dragging distance by percentage if it's possible
    browser.actions().dragAndDrop(
      this.flatRoofSliderHandle,
      {x: distanceX, y: 0} // by pixels
    ).perform();
    browser.waitForAngular();
  };

  this.addWallConstruction = function (material, percentage, isOther) {
    if (isOther) {
      this.otherWallConstrMaterial.sendKeys(material);
    } else {
      this.wallConstrMaterial.sendKeys(material);
    }
    this.wallConstrPercentage.sendKeys(percentage);
    this.wallConstrAddBtn.click();
  };

  this.addFlatRoofConstruction = function (material, percentage, isOther) {
    if (isOther) {
      this.otherFlatRoofConstrMaterial.sendKeys(material);
    } else {
      this.flatRoofConstrMaterial.sendKeys(material);
    }
    this.flatRoofConstrPercentage.sendKeys(percentage);
    this.flatRoofConstrAddBtn.click();
  };

  this.addNonFlatRoofConstruction = function (material, percentage, isOther) {
    if (isOther) {
      this.otherNonFlatRoofConstrMaterial.sendKeys(material);
    } else {
      this.nonFlatRoofConstrMaterial.sendKeys(material);
    }
    this.nonFlatRoofConstrPercentage.sendKeys(percentage);
    this.nonFlatRoofConstrAddBtn.click();
  };

  this.removeAllConstructions = function () {
    var removeBtns = element.all(by.buttonText('Remove'));
    removeBtns.click();
  };

  this.updatePropertyDetailsBuilding = function (formData) {
    if (!formData) formData = this.testingFormData;

    if (formData.bedroomNumber) this.bedroomNumber.sendKeys(formData.bedroomNumber);
    if (formData.buildingYear) this.buildingYear.sendKeys(formData.buildingYear);
    if (formData.buildingType) this.buildingType.sendKeys(formData.buildingType);
    if (formData.listedBuilding) this.listedBuilding.sendKeys(formData.listedBuilding);
    if (formData.floorConstruction) this.floorConstruction.sendKeys(formData.floorConstruction);

    if (formData.wallConstructions) {
      for (var i = 0, len = formData.wallConstructions.length; i < len; i++) {
        this.addWallConstruction(formData.wallConstructions[i].material, formData.wallConstructions[i].percentage);
      }
    }

    if (formData.flatRoofPercentage) this.dragFlatRoofSlider(formData.flatRoofPercentage);
    if (formData.roofConstructions) {
      for (var j = 0, len = formData.roofConstructions.length; j < len; j++) {
        var isFlat = formData.roofConstructions[j].isFlat;
        if (isFlat) {
          this.addFlatRoofConstruction(formData.roofConstructions[j].material, formData.roofConstructions[j].percentage);
        } else {
          this.addNonFlatRoofConstruction(formData.roofConstructions[j].material, formData.roofConstructions[j].percentage);
        }
      }
    }

    if (formData.hasDoorLock) {
      this.hasDoorLock.get(0).click();
    } else {
      this.hasDoorLock.get(1).click();
    }

    if (formData.hasWindowLock) {
      this.hasWindowLock.get(0).click();
    } else {
      this.hasWindowLock.get(1).click();
    }

    if (formData.alarmSystem) this.alarmSystem.sendKeys(formData.alarmSystem);

    this.submitBtn.click();
    browser.waitForAngular();
  };

};

module.exports = PropertyDetailsBuildingPage;
