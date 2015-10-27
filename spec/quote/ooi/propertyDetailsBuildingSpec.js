var LoginPage = require('./../../login/loginPage');
var StartPage = require('./../startPage');
var TypeOfPropertyPage = require('./typeOfPropertyPage');
var PropertyDetailsAddressPage = require('./propertyDetailsAddressPage');
var PropertyDetailsBuildingPage = require('./propertyDetailsBuildingPage');
var loginPage = new LoginPage();
var startPage = new StartPage();
var typeOfPropertyPage = new TypeOfPropertyPage();
var propertyDetailsAddressPage = new PropertyDetailsAddressPage();
var page = new PropertyDetailsBuildingPage();


describe('property details building page', function () {

  beforeAll(function () {
    loginPage.get();
    loginPage.login('test@rentguard.co.uk', '000000');
    // startPage.createNewPolicy();
    // typeOfPropertyPage.updateTypeOfProperty('House (Detached)');
    // propertyDetailsAddressPage.updatePropertyDetailsAddress();
    browser.get('/quote/ooi/property-details-building/N20111001');
  });

  it('should display the error messages when leaving required fields blank', function () {
    page.updatePropertyDetailsBuilding({});
    expect(page.bedroomNumberRequiredErrorMessage.getText()).toBe('Please provide bedroom number'); // TODO: test more messages
  });

  it('should make layout as 0% flat roof on init', function () {
    expect(page.flatRoofLabel.getText()).toBe('Flat roof 0%');
    expect(page.nonFlatRoofLabel.getText()).toBe('Non-flat roof 100%');
    expect(page.flatRoofTable.getAttribute('class')).toMatch('disabled');
    expect(page.nonFlatRoofTable.getAttribute('class')).not.toMatch('disabled');
  });

  it('should change layout when dragging flat roof percentage to 100%', function () {
    page.dragFlatRoofSlider(100);
    expect(page.flatRoofTable.getAttribute('class')).not.toMatch('disabled');
    expect(page.nonFlatRoofTable.getAttribute('class')).toMatch('disabled');
  });

  it('should limit the max percentage of flat roof/ roof constructions tables', function () {
    var maxFlatRoofConstrPercentageOption, maxNonRoofConstrPercentageOption;
    page.dragFlatRoofSlider(-60); // drag back to 40%
    maxFlatRoofConstrPercentageOption = page.flatRoofConstrPercentage.all(by.tagName('option')).get(1);
    maxNonRoofConstrPercentageOption = page.nonFlatRoofConstrPercentage.all(by.tagName('option')).get(1);
    expect(maxFlatRoofConstrPercentageOption.getText()).toEqual('40');
    expect(maxNonRoofConstrPercentageOption.getText()).toEqual('60');
  });

  it('other construction of wall can be input', function () {
    page.wallConstrMaterial.sendKeys('Other');
    element(by.css('body')).click();
    expect(page.otherWallConstrMaterial.isDisplayed()).toBe(true);

    page.addWallConstruction('Gold', 100, 'Other');
    expect(page.wallConstructions.first().getText()).toContain('Gold 100%');
  });

  it('other construction of flat roof can be input', function () {
    page.flatRoofConstrMaterial.sendKeys('Other');
    element(by.css('body')).click();
    expect(page.otherFlatRoofConstrMaterial.isDisplayed()).toBe(true);

    page.addFlatRoofConstruction('Silver', 40, 'Other');
    expect(page.flatRoofConstructions.first().getText()).toContain('Silver 40%');
  });

  it('other construction of roof can be input', function () {
    page.nonFlatRoofConstrMaterial.sendKeys('Other');
    element(by.css('body')).click();
    expect(page.otherNonFlatRoofConstrMaterial.isDisplayed()).toBe(true);

    page.addNonFlatRoofConstruction('Copper', 60, 'Other');
    expect(page.nonFlatRoofConstructions.first().getText()).toContain('Copper 60%');
  });

  it('remove buttons of wall/ flat roof/ roof should work', function () {
    page.removeAllConstructions();
    expect(page.wallConstructions).toEqual([]);
    expect(page.flatRoofConstructions).toEqual([]);
    expect(page.nonFlatRoofConstructions).toEqual([]);
  });

  it('should redirect to property details proposer & property page after form submitted', function() {
    page.dragFlatRoofSlider(-40); // drag back to 0%
    page.updatePropertyDetailsBuilding();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + 'quote/ooi/property-details-proposer');
  });

});

