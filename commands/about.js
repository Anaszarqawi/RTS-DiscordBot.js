const Discord = require('discord.js');
const config = require('../config.json');


module.exports = {
    name: 'about',
    description: 'Send about Us',
    async execute(message) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor(config.COLOR_EMBED)
            .setTitle('RTS | Road To Success')
            .setDescription('It’s a new and distinctive type of student activity that supports university students by providing an integrated environment for them.')
            .addFields(
                {
                    name: 'What does RTS Provide …?',
                    value: '*• Group reviews in which students cooperate to understand the curriculum.\n• Summaries & sources.\n• Organizing study Requirements.\n• Following students to get sure that they get the most understanding of the study materials.*'
                },
                {
                    name: "What does RTS help to solve …?",
                    value:"*• Reduce the gap between students and Professors.\n• Contact student to find their problems and try to solve or present it.*"
                },
                {
                    name: "RTS vision …?",
                    value:"*• Building an academic student capable of self-development and research in a scientific manner, as well as obtaining the greatest degree of understanding of academic courses.\n• To have a friendly environment in which students cooperate to develop themselves and improve their level.*"
                }
            )
            .setImage('https://github.com/Anaszarqawi/anasBot.js/blob/main/assets/embed-banner.jpg?raw=true')
            .setFooter('RTS TEAM')
        message.channel.send({ embeds: [helpEmbed] });
    }
};