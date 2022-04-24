
module.exports = {
    name: "show",
    description: "Show number of users existing in voice channel",
    execute(message, args) {
        let usersNumber = 0;
        let canMuteUsers = message.channel.permissionsFor(message.member).has("MUTE_MEMBERS"); 

        if (message.member.voice.channel && canMuteUsers) { 
            message.member.voice.channel.members.each(() => usersNumber++);
            message.channel.send(`the number of people in this channel is ${usersNumber}`);
        }
        else {
            message.reply("**You don't exist in this channel or you don't have MOD Role**")
        }

    }
}