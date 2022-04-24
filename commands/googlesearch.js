const Discord = require('discord.js');
const config = require('../config.json');
const googleIt = require('google-it');
const permFlags = require('../constants/permFlags.json');


const run = async(bot,interaction) => {
    try {
        const message = interaction.options.getString('message');
         
        googleIt({'limit': 20, 'query': message }).then(results => {
            results.forEach((item,index) => {
                searchEmbed.addField((index + 1) + ': ' + item.title, item.link);
            });
            interaction.reply({
                embeds: [searchEmbed],
                ephemeral: true,
            })
        })
        const searchEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle('Google Search Results:')
            .setDescription(`**Here is what we came up for ${message} on google**`)
    } catch (err) {
        interaction.reply({
            content: `${err}`,
            ephemeral: true
        })
   }
}

module.exports = {
    name: 'googlesearch',
    description: 'searches google for the given text',
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: 'message',
            description: 'What do you want to search for?',
            type: 'STRING',
            required: true,
        }
    ],
    run
}