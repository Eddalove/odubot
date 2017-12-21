const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzkzMjQxNjM3MjM0NDA5NDcy.DRzROw.2uWjSNr98rJ56Xg48oSxXWGtjgQ";
const prefix = "\";



client.on('ready', () => {
console.log(`Odunita at your service`);
});
//ready event


client.on("message", message => {
if(message.author.bot) return;
//ignores all messages from other bots
if(message.channel.type === "dm") return;
//explained by itself
if(message.content === prefix + "ping") {
message.channel.send("pong!");
});

client.login(token);
