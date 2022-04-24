const Discord = require('discord.js');
const permFlags = require('../constants/permFlags.json');
const config = require('../config.json');

const run = async (bot, interaction) => {
    const channel = interaction.options.getChannel('target');
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


module.exports = {
    name: "echo",
    description: "Send message to specific channel",
    perm: permFlags.flags.manageChannels,
    options: [
        {
            name: "target",
            description: "Target Channel",
            type: "CHANNEL",
            required: true
        },
        {
            name: "message",
            description: "Enter a message",
            type: "STRING",
            required: true
        },
        {
            name: "embed",
            description: "Select an option",
            type: "BOOLEAN",
            required: true
        }
    ],
    run
}