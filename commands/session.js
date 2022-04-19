const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'session',
    description: 'use to get the voice channel and join session',
    async execute(message) {

        let channelID = '916013214028947486';
        
        if (channelID) {
            const sessionEmbed = new Discord.MessageEmbed()
                .setColor(config.COLOR_EMBED)
                .setDescription('Join the session now!\n👇\n<#' + channelID + '>')
            message.channel.send({ embeds: [sessionEmbed] });
        }
        
            else
            console.log('No channel found..!');
    }
};