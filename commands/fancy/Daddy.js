const commando = require('discord.js-commando');

class AuthorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'daddy',
            group: 'fancy',
            memberName: 'daddy',
            description: 'Gives a nice message in chat!',
            throttling: {
                usages: 1,
                duration: 1
            }
        });
    }
async run(message, args) {
    return message.channel.send('Give @FreewayPvP#6468 Rank: **Daddy**');
    message.delete(100)
}}

module.exports = AuthorCommand;
