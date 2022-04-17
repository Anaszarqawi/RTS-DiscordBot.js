const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'use to show all commands',
    async execute(message, args) {
        messsage.channel.sendTyping();
        const helpEmbed = new MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('RTS | help')
            .setDescription('Here you can find and check all commands you can trigger for RTS-Bot!')
            .addFields(
                { name: 'rts', value: 'Send links of RTS Workspace' },
                { name: '$mute', value: 'Mute all users in the voice channel (admin/MODs only command)' },
                { name: '$mute @role', value: 'Mute certain roles in the voice channel (admin/MODs only command)' },
                { name: '$unmute ', value: 'Unmute all users in the voice channel (admin/MODs only command)' },
                { name: '$unmute @role', value: 'Unmute certain roles in the voice channel (admin/MODs only command)' },
                { name: '$show', value: 'Returns the amount of users in a voice channel' },
            )
            .setFooter('RTS TEAM')
        channel.send({ embeds: [helpEmbed] });
    }
};