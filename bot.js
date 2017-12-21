const Discord = require('discord.js');
const Client = new Discord.client();

client.on('ready', () => {
    console.log('Odunita at your service.');
});

client.on('message', message => {
    if (message.content === '\ping') {
        message.reply('Pong?');
    }
});

client.login(MzkzMjQxNjM3MjM0NDA5NDcy.DRzROw.2uWjSNr98rJ56Xg48oSxXWGtjgQ);
