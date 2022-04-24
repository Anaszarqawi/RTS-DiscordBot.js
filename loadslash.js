const Discord = require("discord.js")
const config = require('./config.json');
const bot = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})


const guildId = config.GUILD_ID

bot.slashcommands = new Discord.Collection() 

bot.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
bot.loadSlashCommands(bot, false)

bot.on("ready", async () => {
    const guild = bot.guilds.cache.get(guildId)
    if (!guild)
        return console.error("Target guild not found")
    
    await guild.commands.set([...bot.slashcommands.values()])
    console.log(`Successfully loaded in ${bot.slashcommands.size}`)
    process.exit(0)
})

bot.login(config.DISCORD_TOKEN)
