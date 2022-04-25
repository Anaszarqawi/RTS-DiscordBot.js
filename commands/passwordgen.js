const Discord = require('discord.js');
const config = require('../config.json');
const permFlags = require('../constants/permFlags.json');

const run = async (bot, interaction) => {
    const length = interaction.options.getInteger('length');

    if (length > 38 || length < 16) return interaction.reply({
        content: "**Please enter the length of password (16 - 38)**",
        ephemeral: true
    })
    else {
        let pass = '';
        
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!+-';
    
        for (let i = 0; i < length;i++)
        {
            pass += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        const passEmbed = new Discord.MessageEmbed()
        .setTitle('Password Generator')
            .setColor(config.COLOR_EMBED)
        .setDescription(`Your password is ||${pass}||`)
        interaction.reply({
            embeds: [passEmbed],
            ephemeral: true,
        })
    }
}

module.exports = {
    name: 'passwordgen',
    description: 'use to generate random password',
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: 'length',
            description: 'Enter the length of password (16 - 38)',
            type: 'INTEGER',
            required: true,
        }
    ],
    run
}