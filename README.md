# helium-protractor
Integration test of Helium

## Installation
### Install Java SDK
Download and install Java SE Development Kit for your OS:
(better install the version of 7)
[http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)

### Install npm modules (Gulp and Protractor)
Go to the project root, and run:
```
npm install
```

### Update webdriver-manager
Download the necessary selenium tools with:
```
./node_modules/protractor/bin/webdriver-manager update
```

### Run the test!
Now you can test the flow of http://sit.raamsys.co.uk/: (still has some problems when running ```gulp protractor-run```)
```
gulp protractor-install
```

* Reference:
    * [https://angular.github.io/protractor/#/](https://angular.github.io/protractor/#/)
    * [https://www.npmjs.com/package/gulp-protractor](https://www.npmjs.com/package/gulp-protractor)