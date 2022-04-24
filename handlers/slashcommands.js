const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => f.endsWith(ending))
}
module.exports = (bot, reload) => {

    let slashcommands = getFiles("./commands/", ".js")

    if (slashcommands.length === 0)
        console.log("No slash commands loaded")

    slashcommands.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../commands/${f}`)]
        const slashCmd = require(`../commands/${f}`)
        bot.slashcommands.set(slashCmd.name, slashCmd)
    })
}