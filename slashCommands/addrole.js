const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription("gives a role for a user")
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('the required role to give to the user')
                .setRequired(true))
        .addMentionableOption(option =>
            option.setName('user')
                .setDescription('the user')
                .setRequired(true)),

    /**
     * 
     * @param {Discord.Interaction} interaction 
     * 
     */
    async execute(interaction) {
       
        let mentionTarget = interaction.options.getMentionable('user');
        let requiredRole = interaction.options.getRole('role');
        console.log(mentionTarget);
        console.log(requiredRole);
        
        interaction.reply({ content: 'done', ephemeral: true}); 
        console.log('done');
    }
};





