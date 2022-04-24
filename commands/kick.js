/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const permFlags = require('../constants/permFlags.json')
/**
 * @param {Discord.Client} bot 
 * @param {Discord.Interaction} interaction
 */

const run = async (bot, interaction) => {
    let target = interaction.options.getMember('user');
    let reason = interaction.options.getString('reason') || "no given reason";
    if(target.kickable) {
        await target.kick(reason);
        interaction.reply({
            content : `${target} have been kicked`,
            ephemeral: true
        })
    }
    else {
        interaction.reply({
            content : `${target} is not kickable or you don't have the permission to kick people!`,
            ephemeral: true
        })
    }
    
}

module.exports = {
    name: "kick",
    description: "kick user",
    perm: permFlags['flags'].canKick,
    options: [
        {
            name: "user",
            description: "the user",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "reason for kicking the user",
            type: "STRING",
            required: false,
        }
    ],
    run
}
