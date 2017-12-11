const commando = require('discord.js-commando');

class GetAltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getalt',
            group: 'fancy',
            memberName: 'getalt',
            description: 'Every 15Min 1 Free ALT!',
            throttling: {
                usages: 1,
                duration: 900
            }
        });
    }

async run(message, args) {
    var fagg = Math.floor(Math.random() * 7) +1
    message.delete(10000)
    if (fagg == 1) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: zerogman493@comcast.net\n=====[FaNcY Alt Gen]=====\nPassword: galaxies1\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 2) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: Niclas.burow@web.de\n=====[FaNcY Alt Gen]=====\nPassword: Lynn2009\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 3) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: vaneffenc@yahoo.com\n=====[FaNcY Alt Gen]=====\nPassword: pucepar7\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 4) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: rcates777@yahoo.com\n=====[FaNcY Alt Gen]=====\nPassword: Tolkien123\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 5) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: sonnyw@live.co.uk\n=====[FaNcY Alt Gen]=====\nPassword: voxon10vox\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 6) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: Cruiseyboo@gmail.com\n=====[FaNcY Alt Gen]=====\nPassword: Cruise99\n=====[FaNcY Alt Gen]=====")
        }
    if (fagg == 7) {
        message.author.send("=====[FaNcY Alt Gen]=====\nEmail: wouter.colla@gmail.com\n=====[FaNcY Alt Gen]=====\nPassword: meertje1\n=====[FaNcY Alt Gen]=====")
        }
    return message.channel.sendMessage("=====[FaNcY Alt Gen]=====\nCheck your DM's!").then(message => message.delete(10000))
}}

module.exports = GetAltCommand;