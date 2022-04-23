const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('repo')
        .setDescription('Send bot Repository link on github'),
    async execute(interaction) {
        interaction.channel.sendTyping();
        await interaction.reply({
            content: 'https://github.com/Anaszarqawi/RTS-DiscordBot.js',
            ephemeral: true,
        });
    }
};