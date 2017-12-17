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
	client.user.setGame(`with @FreewayPvP#6468`);
	client.user.setGame(`with @FreewayPvP#6468`,`https://twitch.tv/thomaspvp5`);

const path = require('path');

client.registry
  .registerGroups([
		['cool', 'Cool commands'],
		['fancy', 'fancy Commands'],
		['games', 'Game Commands'],
		['alts', 'alt Commands'],
		['fun', 'Fun Commands']
	])

	.registerDefaultGroups()
	.registerDefaultCommands({ help: false })
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login('Mzg4NzA2MDUzNjQ0MzUzNTM4.DQ1Rfw.qCOmFwoh8tw3Cz8OBlJCOm1LQHc');
