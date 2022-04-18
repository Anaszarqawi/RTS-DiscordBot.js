const Discord = require('discord.js');
const translate = require('@vitalets/google-translate-api'); // for translating google api
const langs = require('../constants/langParm.json');

/* 
$translate translate-text <to-lang>
*/

module.exports = {
    name : 'translate',
    description: "this command translate user's text",

    execute(message, args) {
        if(args[1] == undefined) {
            message.reply("Enter a word!");
        }
        else {
            // to delete the $translate
            args.shift();
            // to get the parameter with out <>
            let toParm = args.pop().slice(1, -1);
            // to get the sentence
            let sentence = args.join(' ');

            // to get the translation api to work

            translate(sentence, {to: toParm}).then(res => {
                message.channel.sendTyping();
                message.reply(`${langs[res.from.language.iso]} => ${langs[toParm]}\nThe translated text : ${res.text}`);
                //=> nl
            }).catch(err => {
                message.reply(`error in : ${err}`);
            });
        }
        
    }
}