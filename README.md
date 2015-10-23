# helium-protractor
Integration test of Helium

## Installation
### Install Java SDK
Download and install Java SE Development Kit for your OS:
(better install the version of 7)
[http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)

### Install Protractor
Use npm to install Protractor globally with:
```
npm install -g protractor
```

### Update webdriver-manager
Download the necessary selenium tools with:
```
webdriver-manager update
```
Start up a server with:
```
webdriver-manager start
```

### Install other needed npm modules
```
npm install
```

## Run the test!
Now you can test all flow of SIT:
```
protractor protractor.conf.js
```
Or if you want to test a single spec file:
```
protractor --specs=runOnlyThisFile.js
```

## To modify the settings
Config file is placed at ```protractor.conf.js```

---
* Reference:
    * [https://angular.github.io/protractor/#/](https://angular.github.io/protractor/#/)
