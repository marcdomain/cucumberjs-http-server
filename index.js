const fs = require('fs');
const argv = require('yargs').argv;
const runner = require('./run');

const createReportDirectory = (path) => {
  if (fs.existsSync(path)) return true;

  fs.mkdirSync(path);
};
createReportDirectory('cucumber-report');

const {testPath, serverAddress} = argv;
const startScript = argv.startScript ? argv.startScript: "";

let cliArguments = [];

Object.keys(argv).forEach(key => {
  if (argv[key] && ['_', '$0'].indexOf(key) === -1) {
    cliArguments = cliArguments.concat([`--${key}=${argv[key]}`]);
  }
});

const parseCliArguments = cliArguments.join(' ');
const command = `
  server-test ${startScript} ${serverAddress}\
  'cucumber-js ${testPath}\
  --format json:cucumber-report/report.json\
  ${parseCliArguments}'
`;

runner.runCommands([command]);