const Discord = require('discord.js');
const dotenv = require('dotenv').config();
const config = require('./config.json');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '$';

bot.on('ready', () => {
    console.log("This bot is online!");
    bot.user.setActivity("$help | rts");
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ")
    
    if (message.content === "rts") {
        message.channel.sendTyping();
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('RTS WORKSPACE')
            .setURL('https://bit.ly/RTSworksapace')
            .setDescription('Here you will find all the Summaries, Videos, Answers to Exams and any materials that will benefit you in the field of CS.')
            .addField('\u200B','\u200B')
            .addFields(
                { name: 'Assignments', value: 'https://bit.ly/RTS_Assignments' },
                { name: 'Materials', value: 'https://bit.ly/RTS_Materials'},
                { name: 'Exercises', value: 'https://bit.ly/RTS_Exercises'},
                { name: 'Sessions', value: 'https://bit.ly/RTS_Sessions'},
            )
            .setImage('https://github.com/Anaszarqawi/anasBot.js/blob/main/assets/intro-01.jpg?raw=true')
            .setFooter("RTS TEAM")
        message.channel.send({ embeds: [exampleEmbed] });
        return
    }

    switch (args[0]) {
        case "link":
    }
})

// bot.login(process.env.TOKEN)
bot.login(config.DISCORD_TOKEN)