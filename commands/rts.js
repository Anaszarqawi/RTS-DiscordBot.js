const Discord = require('discord.js');

module.exports = {
    name: 'rts',
    description: "send link of RTS Workspace",
    execute(message, args) {
        message.channel.sendTyping();
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('RTS WORKSPACE')
            .setURL('https://bit.ly/RTSworksapace')
            .setDescription('Here you will find all the Summaries, Videos, Answers to Exams and any materials that will benefit you in the field of CS.')
            .addFields(
                { name: 'Assignments', value: 'https://bit.ly/RTS_Assignments' },
                { name: 'Materials', value: 'https://bit.ly/RTS_Materials'},
                { name: 'Exercises', value: 'https://bit.ly/RTS_Exercises'},
                { name: 'Sessions', value: 'https://bit.ly/RTS_Sessions'},
            )
            .setImage('https://github.com/Anaszarqawi/anasBot.js/blob/main/assets/embed-banner.jpg?raw=true')
            .setFooter("RTS TEAM")
        message.channel.send({ embeds: [exampleEmbed] });
    }
    
}