const Discord = require("discord.js")


const run = async (bot, interaction) => {
    const member = interaction.options.getUser("user")
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setTitle("Avatar Link")
        .setURL(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=4096`)
        .setImage(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=4096`)
        .setAuthor({ name: `${member.username}#${member.discriminator}`, iconURL: `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png` })
        .setFooter({text:`Requested By ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png` })
        return interaction.reply({
        embeds: [avatarEmbed],
        ephemeral: true,
    });
}

module.exports = {
    name: "avatar",
    description: "Gets a user avatar",
    perm: "",
    options: [
        {
            name: "user",
            description: "The user to get avatar for",
            type: "USER",
            required: true
        }
    ],
    run
}