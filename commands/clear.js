const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "Remove messages with number",
    execute(message, args) {
        let usersNumber = 0;
        let CanEditChannels = message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS"); 

        if (CanEditChannels) {
            if (args[1] != undefined) {
                message.channel.bulkDelete(args[1])
            }
            else {
                message.reply('**Please enter the number of messages you want to remove**')
            }
        }
        else {
            message.reply("**You don't have MODs role**")
        }
    }
}