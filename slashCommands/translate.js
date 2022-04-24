const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const translate = require('@vitalets/google-translate-api'); // for translating google api
const config = require('../config.json');
const langs = require('../constants/langParm.json');


const run = async (bot, interaction) => {
    let sentence = interaction.options.getString('sentence');
    let prefix = interaction.options.getString('prefix');

    
    await translate(sentence, {to: prefix}).then(res => {
        interaction.channel.sendTyping();
        interaction.reply({
            content : `${langs[res.from.language.iso]} => ${langs[prefix]}\nThe translated text : ${res.text}`,
            ephemeral: true,
        });
    }).catch(err => {
        interaction.reply({
            content : `error in ${err}`,
            ephemeral: true,
        });
    });

}


module.exports = {
    name: "translate",
    description: "translates a sentence",
    perm: "",
    options: [
        {
            name: "sentence",
            description: "the sentence to be translated",
            type: "STRING",
            required: true,
        },
        {
            name: "prefix",
            description: "the prefix of a langauge that you want to translate to",
            type: "STRING",
            required: true,
        }
    ],
    run
}
