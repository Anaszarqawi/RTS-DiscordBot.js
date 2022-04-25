/* eslint-disable no-undef */
const Discord = require("discord.js")
const config = require('../config.json');

const run = async (bot) => {

    const guildId = config.GUILD_ID;
    
    bot.slashcommands = new Discord.Collection() 
    
    bot.loadSlashCommands = (bot, reload) => require("./slashcommands")(bot, reload)
    bot.loadSlashCommands(bot, false)
    
        const guild = bot.guilds.cache.get(guildId)
        if (!guild)
            return console.error("Target guild not found")
        
        await guild.commands.set([...bot.slashcommands.values()])
        console.log(`Successfully loaded in ${bot.slashcommands.size}`)
}

module.exports = {
    run
}