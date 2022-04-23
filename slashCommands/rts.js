const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rts')
        .setDescription('Send link of RTS Workspace'),
    async execute(interaction) {

        interaction.channel.sendTyping();
        const rtsEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle('RTS WORKSPACE')
            .setURL('https://bit.ly/RTSworksapace')
            .setDescription('Here you will find all the Summaries, Videos, Answers to Exams and any materials that will benefit you in the field of CS.')
            .addFields(
                { name: 'Assignments', value: 'https://bit.ly/RTS_Assignments' },
                { name: 'Materials', value: 'https://bit.ly/RTS_Materials'},
                { name: 'Exercises', value: 'https://bit.ly/RTS_Exercises'},
                { name: 'Sessions', value: 'https://bit.ly/RTS_Sessions'},
            )
            .setImage('https://github.com/Anaszarqawi/anasBot.js/blob/main/assets/embed-banner.jpg?raw=true')
            .setFooter("RTS TEAM")
        interaction.channel.send({ embeds: [rtsEmbed] });
        interaction.channel.sendTyping();
        interaction.reply({
            content: 'Done!',
            ephemeral: true
        })
    }
};