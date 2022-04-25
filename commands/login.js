const config = require('../config.json');

const run = async (bot, interaction) => {
    const channel = interaction.guild.channels.cache.get(config.EMAILS_CHANNEL);
    const email = interaction.options.getString("email");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (email.match(validRegex)) {
        await channel.send(`\`${email}\``)

        await interaction.channel.sendTyping();
        await interaction.reply({
            content: '**:white_check_mark: Your Email has been sent to the MODs!**\n**Try `/rts` command after 15 min!**',
            ephemeral: true,
        });
    }
    else {
        await interaction.channel.sendTyping();
        await interaction.reply({
            content: '**:x: Please enter a valid Email!**',
            ephemeral: true,
        });
    }


}

module.exports = {
    name: "login",
    description: "Send your notion account Email to the MODs to register you in RTS",
    perm: "",
    options: [
        {
            name: "email",
            description: "Enter your Email in Notion",
            type: "STRING",
            required:"true"
        }
    ],
    run
}