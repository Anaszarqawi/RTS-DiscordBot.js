const Discord = require('discord.js');
const config = require('../config.json');


const run = async (bot, interaction) => {
    const sendEmbed = async (usersNumber) => {
        const Embed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setDescription(`**Un-muted ${usersNumber} member(s)**`)
        await interaction.reply({
            embeds: [Embed],
            ephemeral: true
        });
    }

    let usersNumber = 0;
    let inChannel = interaction.member.voice.channel;
    // without options(Args) {Um-mute all}
    if (inChannel) {
        if (interaction.options._hoistedOptions[0] == undefined) {
            interaction.member.voice.channel.members.forEach(member => {
                if (member != interaction.member) {
                    member.voice.setMute(false);
                    usersNumber++;
                }
            });
            sendEmbed(usersNumber)
        }
        // with options {Um-mute by role or member}
        else {
            let type = interaction.options._hoistedOptions[0].type;
            let id = interaction.options._hoistedOptions[0].value;
            // Um-mute by role
            if (type === "ROLE") {
                interaction.member.voice.channel.members.forEach((member) => {
                    if (member.roles.cache.has(id)) {
                        member.voice.setMute(false);
                        usersNumber++;
                    }
                });
                sendEmbed(usersNumber)
            }
            // Um-mute by member
            else if (type === "USER") {
                interaction.member.voice.channel.members.forEach((member) => {
                    if (member.id == id) {
                        member.voice.setMute(false);
                        interaction.reply({
                            content: `**<@${id}> has been un-muted!**`,
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
}


module.exports = {
    name: "unmute",
    description: "Um-mute all/role/user from voice channel",
    perm: "MUTE_MEMBERS",
    options: [
        {
            name: "user",
            description: "Un-mute specific user",
            type: "USER",
            required: false
        },
        {
            name: "role",
            description: "Un-mute all users who have a specific role",
            type: "ROLE",
            required: false,
        }
    ],
    run
}