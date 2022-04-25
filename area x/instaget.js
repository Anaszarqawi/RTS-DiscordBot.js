const rp = require('request-promise');
const $ = require('cheerio').default;

const run = async (bot, interaction) => {
    const url = interaction.options.getString("url");
    console.log(url);

    rp(url)
    .then(function(html){
        //success!
        console.log($('', html));
    })
    .catch(function(err){
        console.log(err)
    });
}

module.exports = {
    name: "instaget",
    description: "download a one photo from instagram post",
    perm: "",
    options: [
        {
            name: "url",
            description: "Enter the post link",
            type: "STRING",
            required: true
        }
    ],
    run
}