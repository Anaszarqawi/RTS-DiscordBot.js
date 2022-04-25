const Discord = require("discord.js")
const config = require('./config.json');
const bot = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})


bot.on("ready", () => {
    console.log(`${bot.user.tag} is up and running`);
    bot.user.setActivity("/rts", { type: 'LISTENING' });
})

bot.slashcommands = new Discord.Collection() 

bot.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
bot.loadSlashCommands(bot, false)

bot.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return 
    if (!interaction.inGuild()) return interaction.reply("**This command can only be used in a server**")
    const slashCmd = bot.slashcommands.get(interaction.commandName)

    if (!slashCmd) return interaction.reply("Invalid slash command")

    if (slashCmd.perm && !interaction.member.permissions.has(slashCmd.perm))
        return interaction.reply({
            content: "**You do not have permission for this command!**",
            ephemeral:true
        })

    slashCmd.run(bot, interaction)
})

bot.login(config.DISCORD_TOKEN)