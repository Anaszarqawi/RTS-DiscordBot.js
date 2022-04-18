const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name : 'addRole',
    description : "give role to user by id",
    execute(message, args) {
        let RolesManager = message.member.permissions.has("MANAGE_ROLES")
        let usersNumber = 0;
        let mentions = 0;
        let role = args[1].replace(/\D/g, '');

        message.mentions.members.forEach(() => mentions++);

        if (RolesManager) {

            if (mentions >= 1) {
                message.mentions.members.forEach((member) => {
                        member.roles.add(role)
                        usersNumber++;
                });
            }
            else {
                let member = message.mentions.members.first();
                member.roles.add(role)
                usersNumber++;
            }
        }
        else {
            message.reply("**You don't have the permission to add roles !**");
            return
        }

        
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            // .setTitle(`Add ${usersNumber} member(s)`)
            .setTitle(`DONE`)
        message.channel.send({ embeds: [exampleEmbed] });
    }
}
