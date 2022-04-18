module.exports = {
    name: 'repo',
    description: "Send bot Repository link on github",
    execute(message) {
        message.channel.sendTyping();
        message.channel.send('https://github.com/Anaszarqawi/RTS-DiscordBot.js');
    }
    
}