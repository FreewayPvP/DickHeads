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

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

const path = require('path');

client.registry
  .registerGroups([
		['cool', 'Cool commands'],
		['fancy', 'fancy Commands'],
		['games', 'Game Commands'],
		['alts', 'alt Commands'],
		['fun', 'Fun Commands']
	])

	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login('Mzg4NzA2MDUzNjQ0MzUzNTM4.DQ1Rfw.qCOmFwoh8tw3Cz8OBlJCOm1LQHc');