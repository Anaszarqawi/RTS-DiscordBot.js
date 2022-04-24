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
    let days = interaction.options.getNumber('days');
    
    if(target.bannable) {
        if(1 <= days <= 7) {
            await target.ban({
                days: days,
                reason: reason
            });
            interaction.reply({
                content : `${target} have been banned`,
                ephemeral: true
            })
        }
        else {
            interaction.reply({
                content : "the number of days is less one or bigger than 7",
                ephemeral: true
            })
        }
    }
    else {
        interaction.reply({
            content : `${target} is not bannable or you don't have the permission to ban people!`,
            ephemeral: true
        })
    }
    
}

module.exports = {
    name: "ban",
    description: "ban user",
    perm: permFlags['flags'].canBan,
    options: [
        {
            name: "user",
            description: "the user",
            type: "USER",
            required: true,
        },
        {
            name: "days",
            description: "the number of days the user will be banned",
            type: "NUMBER",
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
