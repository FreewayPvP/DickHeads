const Commando = require('discord.js-commando');

const client = new Commando.Client({
	owner: '367910644181368833'
});

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Hey, I Just Finished Starting up! You can now use me in Discord!`);
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`on ${client.guilds.size} servers`);
});

const path = require('path');

client.registry
.registerDefaultTypes()
.registerGroups([
		['alts', 'Command Group']
		['fancy', 'Command Group']
])
.registerDefaultGroups()
.registerDefaultCommands({ help: false })
.registerCommandsIn(path.join(__dirname, 'commands'));

client.login('Mzg4NzA2MDUzNjQ0MzUzNTM4.DQ1Rfw.qCOmFwoh8tw3Cz8OBlJCOm1LQHc');
