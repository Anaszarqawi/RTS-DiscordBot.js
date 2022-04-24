/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../config.json');
const permFlags = require('../constants/permFlags.json')



const run = async (bot, interaction) => {
    const sendEmbed = async (usersNumber) => {
        const Embed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setDescription(`**Muted ${usersNumber} member(s)**`)
        await interaction.reply({
            embeds: [Embed],
            ephemeral: true
        });
    }

    let usersNumber = 0;
    let inChannel = interaction.member.voice.channel;
    let targetRole = interaction.options.getRole("role");
    let targetChannel = interaction.options.getChannel("channel");

    if (inChannel) {
        interaction.member.voice.channel.members.forEach((member) => {
            if (member.roles.cache.has(targetRole.id)) {
                member.voice.setChannel(targetChannel)
                usersNumber++;
                console.log("1");
            }
            console.log("2");
        });
        sendEmbed(usersNumber)
    }
    else {
        interaction.reply({
            content: `**You are not in the channel!**`,
            ephemeral: true
        })
    }
};

module.exports = {
    name: "move",
    description: "Move all users who have a specific role",
    perm: permFlags.flags.canMoveMembers,
    options: [
        {
            name: "role",
            description: "Target Role",
            type: "ROLE",
            required: true,
        },
        {
            name: "channel",
            description: "Target Channel",
            type: "CHANNEL",
            required: true,
        }
    ],
    run
}