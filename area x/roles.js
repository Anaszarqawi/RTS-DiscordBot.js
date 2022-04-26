const config = require('../config.json');

const run = async (bot, interaction) => {
    const guild = bot.guilds.cache.get(config.GUILD_ID);
    const roles = await guild.roles.fetch();
    let rolesObj = {}
    let arr = []
    roles.forEach(role => {
        rolesObj[`{role.name}`] = role.rawPosition;
        // console.log(`${role.name}   ===>   ${role.rawPosition} member`)
    })
    arr.push(rolesObj)
    console.log(arr);
    // console.log(roles);

}

module.exports = {
    name: "roles",
    description: "Show all roles",
    perm: "",
    run
}