const Discord = require('discord.js');
const { description } = require('./rts');

module.exports = {
    name: 'session',
    description: 'use to get voice channel and join session',
    async execute(message, args) {
        message.channel.sendTyping();
        /**
         primary voice channel ID
         */
        let channelID = '916013214028947486';
        /**
         * It sends the voice channel
         * @param {string} channelID 
         */
        let voiceChannelSend = (id) => {
            id = channelID;
            if (id)
                await.interaction.reply('Join the session now! \n <#${channelID}>');
            else
                console.log('No Channel detected...!');
        }
        
    }
};