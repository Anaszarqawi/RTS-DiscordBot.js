const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name : 'unmuteAll',
    description : "unmute all people",
    execute(message) {
        let canMuteUsers = message.member.permissions.has("MUTE_MEMBERS")
        let inChannel = message.member.voice.channel;
        let canMuteUsersTest = (member) => !(member.permissions.has("MUTE_MEMBERS"))
        let usersNumber = 0;

        if (inChannel && canMuteUsers) {
            message.member.voice.channel.members.forEach((member) => {
                if (canMuteUsersTest(member)) {
                    member.voice.setMute(false);
                    usersNumber++;
                }
            });
        }
        else {
            message.reply("**You need to join a voice channel first or you don't have the permission to un-mute people !**");
            return
        }

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle(`Un-muted ${usersNumber} member(s)`)
        message.channel.send({ embeds: [exampleEmbed] });
    }
}
