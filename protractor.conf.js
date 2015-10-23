exports.config = {
  specs: ['./spec/**/*.js'],
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
