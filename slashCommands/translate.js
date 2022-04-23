const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const translate = require('@vitalets/google-translate-api'); // for translating google api
const config = require('../config.json');
const langs = require('../constants/langParm.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('translates a sentence')
        .addStringOption( option => 
            option.setName('sentence')
                .setDescription('sentence that you want to translate')
                .setRequired(true))
        .addStringOption( option => 
            option.setName('prefix')
                .setDescription('the prefix of the langauge that you want to translate to')
                .setRequired(true)
                .addChoice('arabic', 'ar')
                ),

    async execute(interaction) {
        
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
};