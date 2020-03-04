const {spawnSync} = require('child_process');
const runCommands = async(commands, env = undefined, additionalArguments = []) => {
  const shellOptions = {
    shell: true,
    stdio: 'inherit'
  };

  if (env) {
    shellOptions.env = env;
  }

  try {
    for (let i = 0; i < commands.length; i++) {
      const response = spawnSync(commands[i], additionalArguments, shellOptions);

      if (!response || response.status === 1) {
        process.exit(1);
      }
    }
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

module.exports = {runCommands};