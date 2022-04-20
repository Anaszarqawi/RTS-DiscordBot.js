const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name: 'sendMsg',
    description: 'send message to specific channel by name',
    async execute(message,args) {
        const manageChannels = message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS,Discord.Permissions.FLAGS.MANAGE_MESSAGES,Discord.Permissions.FLAGS.SEND_MESSAGES,Discord.Permissions.FLAGS.VIEW_CHANNEL);
        const manageChEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
        if (!manageChannels) {
                manageChEmbed.setDescription("🚫 You don't have permission to use this command!")
            message.reply({ embeds: [manageChEmbed] });
        }
        const channelID = args[1].replace(/\D/g, '');
        const channelTarget = message.guild.channels.cache.get(channelID);
        const messageContent = message.content.split(' ');
        manageChEmbed.setDescription(`${messageContent.slice(2).join(" ")}`);
        channelTarget.send({ embeds: [manageChEmbed] });
    }
};