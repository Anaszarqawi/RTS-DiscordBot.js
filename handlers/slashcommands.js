const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => f.endsWith(ending))
}
module.exports = (bot, reload) => {

    let slashcommands = getFiles("./slashcommands/", ".js")

    if (slashcommands.length === 0)
        console.log("No slash commands loaded")

    slashcommands.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../slashcommands/${f}`)]
        const slashCmd = require(`../slashcommands/${f}`)
        bot.slashcommands.set(slashCmd.name, slashCmd)
    })
}