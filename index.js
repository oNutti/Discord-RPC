const RPC = require('discord-rpc');
const config = require('./config.json');
const client = new RPC.Client({ transport: 'ipc' });

const activity = {
  details: config.details,
  assets: {
    large_image: config.largeimage,
    large_text: config.largetext,
    small_image: config.smallimage,
    small_text: config.smalltext,
  },
  buttons: [
    {
      label: config.button1,
      url: config.button1link,
    },
    {
      label: config.button2,
      url: config.button2link,
    },
  ],
  timestamps: { start: Date.now() },
  instance: true,
};

client.on('ready', () => {
  console.log('Done');
  client.request('SET_ACTIVITY', { pid: process.pid, activity: activity });
});

client.login({ clientId: config.clientid, clientSecret: config.clientSecret });
