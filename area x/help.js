const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Choose your problem and you will find the solution inshallah')
        .addStringOption(option =>
            option.setName("problem")
                .setDescription("Choose you problem")
                .setRequired(true)
                .addChoice("I can't access RTS Workspace", "dds")
            ),
    async execute(interaction) {

        let x = interaction.options.getString("problem");
        console.log(x);

        await interaction.reply('try open this link: \nhttps://bit.ly/RTSworksapace')
    }
};