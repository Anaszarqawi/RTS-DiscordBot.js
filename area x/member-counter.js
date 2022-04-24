const Discord = require('discord.js');

module.exports = async (bot) => {
    const guild = bot.guilds.cache.get('881560236446601216');
    if (!guild) return;
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('965211022388518963');
        channel.setName(`Total Members : ${memberCount.toLocaleString()}`);
    }, 5000)
}