const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('session')
        .setDescription('Use to get the voice channel and join session'),
    async execute(interaction) {
        const channelID = '916013214028947486';
        if (channelID) {
            const sessionEmbed = new Discord.MessageEmbed()
                .setColor(config.COLOR_EMBED)
                .setDescription(`Join the session\n<#${channelID}>`)
            await interaction.reply({
                embeds: [sessionEmbed],
                ephemeral: true
            });
        }
        else
            console.log('No channel found..!');
    }
};