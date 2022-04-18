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
            // to get the paramater with out <>
            let toParm = args.pop().slice(1, -1);
            // to get the senctence
            let senctence = args.join(' ');

            // to get the translation api to work
            translate(senctence, {to: toParm}).then(res => {
                message.channel.sendTyping();
                message.reply(`from ${langs[res.from.language.iso]}\nto ${langs[toParm]}`);
                message.channel.sendTyping();
                message.reply(`the translated text : ${res.text}`);

                console.log(res.from.language.iso);
                //=> nl
            }).catch(err => {
                message.reply(`error in : ${err}`);
            });
        }
        
    }
}