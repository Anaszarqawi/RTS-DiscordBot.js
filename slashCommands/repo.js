const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const run = async (bot, interaction) => {
    interaction.channel.sendTyping();
    return interaction.reply({
        content: 'https://github.com/Anaszarqawi/RTS-DiscordBot.js',
        ephemeral: true,
    });
}

module.exports = {
    name: "repo",
    description: "Send bot Repository link on github",
    perm: "",
    run
}