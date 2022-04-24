/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const permFlags = require('../constants/permFlags.json')
/**
 *  
 * @param {Discord.Client} bot 
 * @param {Discord.Interaction} interaction
 */
const run = async (bot, interaction) => {
    try {
        let mentionTarget = interaction.options.getMember('user');
        let requiredRole = interaction.options.getRole('role');
        await mentionTarget.roles.add(requiredRole.id)
        
        interaction.reply({ content: 'done', ephemeral: true}); 
        console.log('done');

    }catch (error) {
        interaction.reply({ content: `${error}` , ephemeral: true})
        /* interaction.reply({ content: "I can't give this role to the user because the role is higher than my role", ephemeral: true}); */
    }
    
}

module.exports = {
    name: "addrole",
    description: "gives a role for a user",
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: "role",
            description: "the required role to give to the user",
            type: "ROLE",
            required: true,
        },
        {
            name: "user",
            description: "the user",
            type: "USER",
            required: true,
        }
    ],
    run
}
