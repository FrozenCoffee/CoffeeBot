const Discord = require('discord.js);
const client = new Discord.Client();

client.on('ready' , () => {
 console.log('I am ready!');
 });
 
 client.on('message', message => {
  if (message.content === 'ping') {
   message.reply('pong');
  }
});

//THIS MUST BE THIS WAY
client.login(process.env.NDA3MDAzNzkxNzM3NDg3Mzcy.DU7MnA.2zL8_ULNhFrw87I5XCL6jAyQGSE);
