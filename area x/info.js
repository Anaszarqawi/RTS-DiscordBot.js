const run = async (bot, interaction) => {
    interaction.channel.sendTyping();
    return interaction.reply({
        content: '**DONE**',
        ephemeral: true,
    });
}

module.exports = {
    name: "info",
    description: "Get info about a user or a server!",
    perm: "",
    options: [
        {
            name: "sdsgsg",
            description: "ghsdhgsgh",
            type:"USER",
            required:true
        }
    ],
    subcommands:
        {
            name: "usRer",
            description: "info about a user",
            options: [
                {
                    name: "target",
                    description: "The user",
                    type:"string",
                    required: true,
                    choices: [
                        {

                        }
                    ]
                }
            ]
        },
    run
}