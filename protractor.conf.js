exports.config = {
  specs: ['./spec/**/*.js'],
  //baseUrl: 'http://sit.raamsys.co.uk/',
  baseUrl: 'http://localhost:8000/',
  capabilities: {
    'browserName': 'firefox'
  },
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
