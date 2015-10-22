exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar', // Make use you check the version in the folder
  //baseUrl: 'http://sit.raamsys.co.uk/',
  baseUrl: 'http://localhost:8000/',
  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
