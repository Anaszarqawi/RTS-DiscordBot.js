const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');


const run = async (bot, interaction) => {
    let canMuteUsers = interaction.member.permissions.has("MUTE_MEMBERS")

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
    // without options(Args) {Mute all}
    if (inChannel && canMuteUsers) {
        if (interaction.options._hoistedOptions[0] == undefined) {
            interaction.member.voice.channel.members.forEach(member => {
                if (member != interaction.member) {
                    member.voice.setMute(true);
                    usersNumber++;
                    console.log();
                }
            });
            sendEmbed(usersNumber)
        }
        // with options {Mute by role or member}
        else {
            let type = interaction.options._hoistedOptions[0].type;
            let id = interaction.options._hoistedOptions[0].value;
            // mute by role
            if (type === "ROLE") {
                interaction.member.voice.channel.members.forEach((member) => {
                    if (member.roles.cache.has(id)) {
                        member.voice.setMute(true);
                        usersNumber++;
                    }
                });
                sendEmbed(usersNumber)
            }
            // mute by member
            else if (type === "USER") {
                interaction.member.voice.channel.members.forEach((member) => {
                    if (member.id == id) {
                        member.voice.setMute(true);
                        interaction.reply({
                            content: `**<@${id}> has been muted!**`,
                            ephemeral: true
                        })
                    }
                });
            }
        }
    }
    else {
        interaction.reply({
            content: `**You are not in the channel!**`,
            ephemeral: true
        })
    }
};

module.exports = {
    name: "mute",
    description: "Mute all/role/user from voice channel",
    perm: "MUTE_MEMBERS",
    options: [
        {
            name: "user",
            description: "Mute specific user",
            type: "USER",
            required: false
        },
        {
            name: "role",
            description: "Mute all users who have a specific role",
            type: "ROLE",
            required: false,
        }
    ],
    run
}