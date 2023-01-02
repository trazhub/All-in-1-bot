const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Corwinl`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Garv>#8557`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Trazhub`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[http://trazhub.me](http://sukuna.live)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 