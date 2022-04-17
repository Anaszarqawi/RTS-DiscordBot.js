const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name : 'muteAll',
    description : "mute all people by mentions or not",
    execute(message) {
        let canMuteUsers = message.member.permissions.has("MUTE_MEMBERS")
        let inChannel = message.member.voice.channel;
        let canMuteUsersTest = (member) => !(member.permissions.has("MUTE_MEMBERS"))
        let usersNumber = 0;

        if (inChannel && canMuteUsers) {
            message.member.voice.channel.members.forEach((member) => {
                if (canMuteUsersTest(member)) {
                    member.voice.setMute(true);
                    usersNumber++;
                }
            });
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
