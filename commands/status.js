/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../config.json')
const permFlags = require('../constants/permFlags.json')
/**
 * @param {Discord.Client} bot 
 * @param {Discord.Interaction} interaction
 */

const run = async (bot, interaction) => {
    const guild = bot.guilds.cache.get(config.GUILD_ID);
    if(!guild) return;

    let allMembers = await guild.members.fetch();
    let memberCount = guild.memberCount;
    let bots = 0;
    
    allMembers.forEach((member) => {
        // console.log(member.user.tag);
        if(member.user.bot) {
            bots++;
        }
    })
    let humans = memberCount - bots;
    
    const embed = new Discord.MessageEmbed()
            .setTitle('SERVER STATS :')
            .setColor(config.COLOR_EMBED)
            .setDescription(`**:busts_in_silhouette: Members : ${humans}**\n**:robot: Bots : ${bots}**`)


    interaction.reply({
        embeds : [embed],
        ephemeral: true
    });

}

module.exports = {
    name: "status",
    description: "the total number of user and bots",
    perm: permFlags['flags'].canModerate,
    run
}
