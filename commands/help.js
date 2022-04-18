const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name: 'help',
    description: 'use to show all commands',
    async execute(message) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle('RTS | help')
            .setDescription('Here you can find and check all commands you can trigger for RTS-Bot!')
            .addFields(
                { name: 'rts', value: 'Send links of RTS Workspace' },
                { name: '$mute', value: 'Mute all users in the voice channel (MODs Command)' },
                { name: '$mute @role', value: 'Mute specific role in the voice channel (MODs Command)' },
                { name: '$mute @user-id', value: 'Mute specific user in the voice channel (MODs Command)' },
                { name: '$unmute ', value: 'Unmute all users in the voice channel (MODs Command)' },
                { name: '$unmute @role', value: 'Unmute specific role in the voice channel (MODs Command)' },
                { name: '$unmute @user-id', value: 'Unmute specific user in the voice channel (MODs Command)' },
                { name: '$show', value: 'Returns the amount of users in a voice channel (MODs Command)' },
                { name: '$clear [x]', value: 'Remove x number of messages (MODs Command)' },
                { name: '$trans [sentence] [toLang]', value: 'Translate any sentence to and from any language' },
                { name: '$about', value: 'About RTS WORKSPACE' },
                { name: '$repo', value: 'Send bot Repository link on github' }
                
            )
            .setFooter('RTS TEAM')
        message.channel.send({ embeds: [helpEmbed] });
    }
};