const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log('Odunita at your service.');
});

const p = "\";
client.on('message', msg => {
    if(msg.content === (p + "ping")) {
        msg.channel.sendMessage("Pong?");
    }
});

client.login('MzkzMjQxNjM3MjM0NDA5NDcy.DRzROw.2uWjSNr98rJ56Xg48oSxXWGtjgQ');
