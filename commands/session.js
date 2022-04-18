const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'session',
    description: 'use to get voice channel and join sessions',
    async execute(message, args) {
        /**
         *  gets `text channel name`
         */
        () => {
            await.interaction.reply('Enter the channel name to send in!');
            /**
             * @param {string} channelName
             * @returns `text channel name`
             */
            (channelName) => {
                channelName = args[1];
                let channelTargeted = message.member.guild.channel.find('name', channelName)
                return channelTargeted;
            };
        };
        /**
         * gets `voice channel name`
         */
        () => {
            await.interaction.reply('Enter the voice channel you want to tag in the message!');
            /**
             * 
             * @param {string} channelName 
             * @returns `voice channel name`
             */
            (channelName) => {
                channelName = args[1];
                let voiceTargeted = message.member.guild.channel.find('name', channelName);
                return voiceTargeted;
            };
        };
        
        /**
         * sends voice channel in the targeted text channel in an `embed`
         * @param {string} channelTargeted 
         */
        (channelTargeted) => {
            if (channelTargeted) {
                () => { 
                    const sessionEmbed = new Discord.MessageEmbed()
                .setColor(config.COLOR_EMBED)
                .setDescription('Join the session now!\n👇\n<#${voiceTargeted}>')
                };
                channelTargeted.send({ embeds: [sessionEmbed] });
            }
            else
                console.log('No channel found..!');
        };
    }
};