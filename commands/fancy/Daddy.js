const commando = require('discord.js-commando');

class AuthorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'daddy',
            group: 'users',
            memberName: 'daddy',
            description: 'Gives a nice message in chat!',
            throttling: {
                usages: 100,
                duration: 1
            }
        });
    }

async run(message, args) {
    message.delete(10000)
    return message.channel.send('Give @FreewayPvP#6468 Rank: **Daddy**');
}}

module.exports = AuthorCommand;