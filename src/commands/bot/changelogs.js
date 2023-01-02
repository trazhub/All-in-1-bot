const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
                name: "📢┆Alert!",
                value: 'The bot lag some time so iam on to fix that ',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 