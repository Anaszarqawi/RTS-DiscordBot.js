const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = config.prefix;

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    bot.commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log("This bot is online!");
    bot.user.setActivity("$help | rts");
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ")
    // without prefix
    if (message.content === "rts") {
        bot.commands.get('rts').execute(message, args)
    }

    //with prefix

    switch(args[0])
    {
        case 'mute':
            bot.commands.get('mute').execute(message, args);
            break;
        case 'unmute':
            bot.commands.get('unmute').execute(message, args);
            break;
        case 'show':
            bot.commands.get('show').execute(message, args);
            break;
        case 'how':
            bot.commands.get('how').execute(message, args);
    }

    

})

// bot.login(process.env.TOKEN)
bot.login(config.DISCORD_TOKEN)