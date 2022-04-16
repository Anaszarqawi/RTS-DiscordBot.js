const Discord = require('discord.js');

module.exports = {
    name : 'mute',
    description : "mute all people by mentions or not",
    execute(message, args) {
        let canMuteUsers = message.channel.permissionsFor(message.member).has("MUTE_MEMBERS"); 

        if(message.member.voice.channel && canMuteUsers) {
            let usersNumber = 0;
            let mentionsPeople = 0;
            // count all mentions in a message
            message.mentions.members.forEach(() => mentionsPeople++);
               
            if(mentionsPeople >= 1) { // checking if there are mentions
                message.mentions.members.forEach((member) => {
                    if(member != message.member) {
                        member.voice.setMute(true);
                        usersNumber++;
                    }    
                });  
            }
            else {
                message.member.voice.channel.members.each((member) => {
                    if(member != message.member) {
                        member.voice.setMute(true);
                        usersNumber++;
                    }    
                });
            }
            

            message.reply(`you muted ${usersNumber} member/s`);
        }
        else {
            message.reply("You need to join a voice channel first or you don't have the permission to mute people !");
          }
    }
}