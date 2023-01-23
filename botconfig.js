module.exports = {
  Admins: ["835584835443228702", "835584835443228702"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/u5YsBvFJ88", //Support Server Link
  Token: process.env.Token || "MTAwMTUyMjA2MzQzOTMxOTA2MA.GvidXC.2WFe6BZB9QchCv6Bup9IfQy8N_inK37ogPZddM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1001522063439319060", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "U5oubr096TQwimrFQGTaGXHl2Yg0dnco", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 50, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "trazhub", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost/", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink-replit.gv23.repl.co",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "maybeiwasboring",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ef4947b1c16448d185ecec507e7e35e0", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "3d9bcaad766a44ea8f888fe8069a52cd", //Spotify Client Secret
  },
};
