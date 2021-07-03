let { initDiscordClient } = require('./discord/client.js');

const startDiscordClient = async () => {
  try {
    initDiscordClient();
  } catch (error) {
    console.error(`Aborting: ${error}`);
    process.exit(0);
  }
};

startDiscordClient();