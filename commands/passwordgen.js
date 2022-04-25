const Discord = require('discord.js');
const config = require('../config.json');
const permFlags = require('../constants/permFlags.json');

const run = async (bot, interaction) => {
    let pass = '';
    
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!+-';

    for (let i = 0; i < 14;i++) 
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

module.exports = {
    name: 'passwordgen',
    description: 'use to generate random password',
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: 'choice',
            description: 'Do you want a password?',
            type: 'BOOLEAN',
            required: true,
        }
    ],
    run
}