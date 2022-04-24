const run = async (bot, interaction) => {
    const channelID = '916013214028947486';
    if (channelID) {
        await interaction.reply({
            content: `**Join the session\n<#${channelID}>**`,
            ephemeral: true
        });
    }
    else
        console.log('No channel found..!');
}


module.exports = {
    name: "session",
    description: "Get the voice channel and join session",
    perm: "",
    run
}