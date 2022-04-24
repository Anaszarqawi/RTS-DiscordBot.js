/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const permFlags = require('../constants/permFlags.json')
/**
 * @param {Discord.Client} bot 
 * @param {Discord.Interaction} interaction
 */

const durations = [
	{ name: "60 seconds", value: 60 * 1000 },
	{ name: "5 minutes", value: 5 * 60 * 1000 },
	{ name: "10 minutes", value: 10 * 60 * 1000 },
	{ name: "30 minutes", value: 30 * 60 * 1000 },
	{ name: "1 hour", value: 60 * 60 * 1000 },
	{ name: "1 day", value: 24 * 60 * 60 * 1000 },
	{ name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
]

const run = async (bot, interaction) => {
    let target = interaction.options.getMember('user');
    let duration = interaction.options.getNumber('duration');
    let reason = interaction.options.getString('reason') || "no given reason";
    if(target.kickable) {
        await target.timeout(duration,reason);
        interaction.reply({
            content : `${target} have been timed out`,
            ephemeral: true
        })
    }
    else {
        interaction.reply({
            content : `${target} can't be timedout or you don't have the permission to timeout a user!`,
            ephemeral: true
        })
    }
    
}

module.exports = {
    name: "timeout",
    description: "timeout a user",
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: "user",
            description: "the user",
            type: "USER",
            required: true,
        },
        {
            name: "duration",
            description: "the duration of the timeout",
            type: "NUMBER",
            choices : durations,
            required: true,
        },
        {
            name: "reason",
            description: "reason for timeout the user",
            type: "STRING",
            required: false,
        }
    ],
    run
}
