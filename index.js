const Discord = require('discord.js');
const dotenv = require('dotenv').config();
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
            // .setThumbnail('https://pps.whatsapp.net/v/t61.24694-24/264326178_320428213240763_6903990224413436051_n.jpg?ccb=11-4&oh=cf95b8149885330eafb77859f186e14e&oe=6266C31B')
            .setImage('https://pps.whatsapp.net/v/t61.24694-24/264326178_320428213240763_6903990224413436051_n.jpg?ccb=11-4&oh=cf95b8149885330eafb77859f186e14e&oe=6266C31B')
            .setFooter("RTS TEAM")
        message.channel.send({ embeds: [exampleEmbed] });
        return
    }

    switch (args[0]) {
        case "link":
            message.channel.sendTyping();
            // message.channel.send('https://bit.ly/RTSworksapace')

            // inside a command, event listener, etc.
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('RTS WORKSPACE')
                .setURL('https://bit.ly/RTSworksapace')
                .setDescription('Here you will find all the Summaries, Videos, Answers to Exams and any materials that will benefit you in the field of CS.')
                // .addFields(
                //     { name: 'Regular field title', value: 'Some value here' },
                //     { name: 'Inline field title', value: 'Some value here', inline: true },
                //     { name: 'Inline field title', value: 'Some value here', inline: true },
                // )
                .setThumbnail('https://yt3.ggpht.com/_2DDrBADr1Rs9Xiyq-cvnvHarsqVwHkLisVaq076pNan6o3v5EBdTsbtaUmPQgxudBtklwHoMw=s88-c-k-c0x00ffffff-no-rj')
            message.channel.send({ embeds: [exampleEmbed] });
            break;
        // case 'clear':
        //     if (!args[1]) return message.reply('Error plz define second arg')
        //     message.channel.bulkDelete(args[1])
        //     break;
    }
})

// bot.login(process.env.TOKEN)
bot.login(process.env.DISCORD_TOKEN)