const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Send message to specific channel by name')
        .addChannelOption(option =>
            option.setName('destination')
            .setDescription('Select a channel')
            .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('message')
            .setDescription('Enter a message')
            .setRequired(true)
        )
        .addBooleanOption(option =>
            option.setName('embed')
                .setDescription('Select an option')
                .setRequired(true)
        ),
    
    /**
     * 
     * @param {Discord.Interaction} interaction 
     */
    async execute(interaction) {

        const channel = interaction.options.getChannel('destination');

        const message = interaction.options.getString('message');
        
        const embed = interaction.options.getBoolean('embed');
        if (embed) {
            const echoEmbed = new Discord.MessageEmbed()
                .setColor(config.COLOR_EMBED)
                .setDescription(message)
            await channel.sendTyping();
            await channel.send({
                embeds: [echoEmbed]
            });
        }
        else {
            await channel.sendTyping();
            await channel.send(message);
        }
        await interaction.channel.sendTyping();
        await interaction.reply({
            content: 'Done!',
            ephemeral: true,
        });
    }
};