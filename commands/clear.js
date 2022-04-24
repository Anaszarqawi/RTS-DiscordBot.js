// eslint-disable-next-line no-unused-vars
const permFlags = require('../constants/permFlags.json');



const run = async (bot, interaction) => { 
    const msgs = interaction.options.getNumber('amount');
    
    if (msgs > 100 || msgs < 1) return interaction.reply({
        content: 'Please, input a number between 1 and 100',
        ephemeral: true,
    })
    await interaction.channel.bulkDelete(msgs)
    await interaction.channel.sendTyping();
    await interaction.reply({
        content: 'Done!',
        ephemeral: true,
    });
}


module.exports = {
    name: "clear",
    description: "Deletes amount of messages at a time (100 max)",
    perm: permFlags['flags'].canModerate,
    options: [
        {
            name: "amount",
            description: "Enter amount of messages 1 - 100 max",
            type: "NUMBER",
            required: true
        }
    ],
    run
};