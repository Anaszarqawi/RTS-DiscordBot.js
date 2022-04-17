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
            if (args[1] == undefined) {
                bot.commands.get('muteAll').execute(message);
            } else {
                bot.commands.get('muteByArgs').execute(message, args);
            }
            break;
        
        case 'unmute':
            if (args[1] == undefined) {
                bot.commands.get('unmuteAll').execute(message);
            } else {
                bot.commands.get('unmuteByArgs').execute(message, args);
            }
            break;
        
        case 'show':
            bot.commands.get('show').execute(message, args);
        
        case 'help':
            bot.commands.get('help').execute(message, args);
            break;


    }

    

})

bot.login(config.DISCORD_TOKEN)