const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const token = 'ODMzNjc3NDU4NTIyNzY3MzYw.YH10ow.IOaNGhHW3Uj-_wb971-u4W5fQ1M';
const prefix = '$';

bot.on('ready', () => {
    console.log("This bot is online!");
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ")
    
    switch (args[0]) {
        case "hi":
            message.channel.sendTyping();
            message.channel.send('hey')
            break;
        case 'clear':
            if (!args[1]) return message.reply('Error plz define second arg')
            message.channel.bulkDelete(args[1])
            break;
    }
})

bot.login(token)