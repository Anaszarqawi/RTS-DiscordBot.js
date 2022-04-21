const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = config.prefix;

const fs = require('fs');
// to get all members
const memberCounter = require('./counter/member-counter')

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    bot.commands.set(command.name, command)
}

const slashCommands = [];

bot.slashCommands = new Discord.Collection();

const slashCommandFiles = fs.readdirSync('./slashCommands/').filter(file => file.endsWith('.js'));

for (const file of slashCommandFiles) {
    const slashCommand = require(`./slashCommands/${file}`);
    slashCommands.push(slashCommand.data.toJSON());
    bot.slashCommands.set(slashCommand.data.name, slashCommand);
}

bot.on('ready', () => {
    console.log(`${bot.user.tag} is up and running`);
    bot.user.setActivity("$help | rts", { type: 'LISTENING' });
    memberCounter(bot);

    const BOT_ID = bot.user.id;
    //for development use only
    const GUILD_ID = '965746491069190155';
    
    const rest = new REST({
        version: '9',
    }).setToken(config.DISCORD_TOKEN);
    
    (async () => {
        try {
            if (config.ENV === 'production')
                await rest.put(
                    Routes.applicationGuildCommands(BOT_ID),
                    {
                        body: slashCommands
                    },
                );
            else {
                await rest.put(
                    Routes.applicationGuildCommands(BOT_ID, GUILD_ID),
                    {
                        body: slashCommands
                    },

                );
            }
        } catch (error) {
            console.error(error);
        }
    })();
})

bot.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;
    let args = interaction.commandName;
    switch (args) {
        case 'session':
            bot.slashCommands.get('session').execute(interaction);
            break;
        case 'repo':
            bot.slashCommands.get('repo').execute(interaction);
            break;
        case 'echo':
            bot.slashCommands.get('echo').execute(interaction);
            break;
        case 'help':
            bot.slashCommands.get('help').execute(interaction);
            break;
    }
})

try {
    bot.on('message', message => {

        let args = message.content.substring(prefix.length).split(" ")
        // without prefix
        if (message.content === "rts") {
            bot.commands.get('rts').execute(message, args)
        }

        //with prefix
        switch (args[0]) {
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
                break;
        
            case 'help':
                bot.commands.get('help').execute(message);
                break;

            case 'clear':
                bot.commands.get('clear').execute(message, args);
                break;

            case 'how':
                bot.commands.get('how').execute(message);
                break;
        
            case 'about':
                bot.commands.get('about').execute(message);
                break;

            case 'repo':
                bot.commands.get('repo').execute(message);
                break;
        
            case 'translate':
                bot.commands.get('translate').execute(message, args);
                break;
        
            case 'role+':
                bot.commands.get('addRole').execute(message, args);
                break;
        
            case 'role-':
                bot.commands.get('removeRole').execute(message, args);
                break;
        
            case 'echo':
                bot.commands.get('echo').execute(message, args);
                break;
        
            case 'session':
                if (args[1] === undefined && args[2] === undefined)
                    bot.commands.get('session').execute(message);
                else if (args[2] === undefined || args[1] === undefined)
                    message.reply('Please, use the command like this!\n$session #textChannel #!voiceChannel')
                else
                    bot.commands.get('sessionLive').execute(message, args);
                break;
        }
    })
} catch (message) {
    message.reply("ERROR")
}

bot.login(config.DISCORD_TOKEN)
