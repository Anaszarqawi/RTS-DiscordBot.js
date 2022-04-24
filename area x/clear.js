const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes amount of messages at a time (100 max)')
        .addIntegerOption(option =>
            option.setName('amount')
            .setDescription('Enter amount of messages 1 - 100 max')
            .setRequired(true)
        ),
    async execute(interaction) {
        
        const msgs = interaction.options.getInteger('amount');
        
        if (msgs > 100 || msgs < 1) return interaction.reply({
            content: 'Please, input a number between 1 and 100',
            ephemeral: true,
        })

        await interaction.channel.bulkDelete(msgs)
        await interaction.channel.sendTyping();
        await interaction.reply({
            content: 'Done!',
            ephemeral: true,
        });
    }
};