const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '$';

bot.on('ready', () => {
    console.log("This bot is online!");
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ")
    
    switch (args[0]) {
        case "link":
            message.channel.sendTyping();
            message.channel.send('https://bit.ly/RTSworksapace')
            break;
        // case 'clear':
        //     if (!args[1]) return message.reply('Error plz define second arg')
        //     message.channel.bulkDelete(args[1])
        //     break;
    }
})

bot.login(process.env.TOKEN)