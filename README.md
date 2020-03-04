# cucumberjs-server-test

Run Cucumberjs end-to-end test without hasles.

* Starts your application server
* Allows you to parse CLI arguments
* Runs your cucumberjs tests
* Closes the server after test is done.

## Installation

cucumberjs-server-test may be installed via npm with

```bash
  npm install cucumberjs-server-test --save
```

## Usage

This should be added as one of your package.json scripts. Using a basic create-react-app as case study:

* Add a script (any key name) for running the cucmber test
* Give it a value `cucumberjs-server-test --testPath=e2e --serverAddress=http://localhost:3000`.
  * Assuming the root directory of your end-to-end test is named `e2e`.
  * And the server is expected to run on `http://localhost:3000`

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e2e-test": "cucumberjs-server-test --testPath=e2e --serverAddress=http://localhost:3000"
  }
```

The sample script above is valid when the script key for starting the application is named `start`. Otherwise, you should add the start script yourself, as below.

```json
  "scripts": {
    "start-server": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e2e-test": "cucumberjs-server-test --testPath=e2e --startScript=start-server --serverAddress=http://localhost:3000"
  }
```

The arguments `--testPath --startScript --serverAddress` can also be parsed as CLI arguments. Ensure you retain the names `testPath`, `startScript` and `serverAddress`

## Commands

Run command and parse arguments (example: browser, username, etc) for running your end-to-end tests.

```bash
  npm run e2e-test -- --browser=chrome username=marcdomain
```

Grab the arguments in your codebase

```javascript
const argv = require('yargs').argv;

const {browser, username} = argv;
```

By running test with command above, test reports `cucumber-report/report.json` will be created in your project root directory.

[https://www.npmjs.com/package/cucumberjs-server-test](https://www.npmjs.com/package/cucumberjs-server-test)
