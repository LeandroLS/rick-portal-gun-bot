const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
    console.log('Rick Portal Gun Bot is Online :D');
});
client.on('message', async (message) => {
    message.channel.send('olá');
})
client.login('NjM2MDE4NTcyNzE1NDkxMzI4.Xa5glA.-JuQ7d2Ste2KClAnluDsGmBGZ1k');