const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: "unmute a user by mention or not",
    execute(message, args) {
        let canMuteUsers = message.channel.permissionsFor(message.member).has("MUTE_MEMBERS");
        
        if(message.member.voice.channel && canMuteUsers) {
            let mentionsPeople = 0;
            // count all mentions in a message
            message.mentions.members.forEach(() => mentionsPeople++);

            if(mentionsPeople >= 1) {
                let mentionsPeople = 0;
                // count all mentions in a message
                message.mentions.members.forEach(() => mentionsPeople++);
               
                if(mentionsPeople >= 1) { // checking if there are mentions
                    message.mentions.members.forEach((member) => {
                        if(member != message.member) {
                            member.voice.setMute(false);
                        }    
                    });  
                }
            }
            else {
                message.member.voice.channel.members.each((member) => {
                    (member != message.member) ? member.voice.setMute(false): null;
                });
            }
        }
    
    }
}