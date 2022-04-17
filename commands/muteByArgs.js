const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name : 'muteByArgs',
    description : "mute people with mentions or Role",
    execute(message, args) {
        let canMuteUsers = message.member.permissions.has("MUTE_MEMBERS")
        let inChannel = message.member.voice.channel;
        let usersNumber = 0;
        let mentions = 0;

        message.mentions.members.forEach(() => mentions++);

        if (inChannel && canMuteUsers) {

            if (mentions >= 1) {
                message.mentions.members.forEach((member) => {
                    if (member != message.member) {
                        member.voice.setMute(true);
                        usersNumber++;
                    }
                });
            }
            else {
                let roleMuted = args[1].replace(/\D/g, '');
                message.member.voice.channel.members.forEach((member) => {
                    if (member.roles.cache.has(roleMuted)) {
                        member.voice.setMute(true);
                        usersNumber++;
                    }
                });
            }
        }
        else {
            message.reply("**You need to join a voice channel first or you don't have the permission to mute people !**");
            return
        }

        
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle(`Muted ${usersNumber} member(s)`)
        message.channel.send({ embeds: [exampleEmbed] });
    }
}
