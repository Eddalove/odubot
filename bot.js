const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzkzMjQxNjM3MjM0NDA5NDcy.DRzROw.2uWjSNr98rJ56Xg48oSxXWGtjgQ";
const prefix = "\" ;



bot.on("ready", async () => {
console.log(`Odunita at your service`);
});
//ready event


bot.on("message", async message => {
if(message.author.bot) return;
//ignores all messages from other bots
if(message.channel.type === "dm") return;
//explained by itself
if(message.content === prefix + "ping") {
message.channel.send("pong!");
});

bot.login(token);
