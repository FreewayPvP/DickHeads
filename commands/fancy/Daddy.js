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
    var fagg = Math.floor(Math.random() * 1) +1
    message.delete(10000)
    if (fagg == 1) {
        message.author.send("Give Freeway Rank **Daddy**")
        }
}

module.exports = AuthorCommand;
