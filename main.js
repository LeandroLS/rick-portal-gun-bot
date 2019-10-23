const Discord = require('discord.js');
const client = new Discord.Client();
const characters = require('./RickAndMortyAPI/characters');
client.on('ready', async () => {
    console.log('Rick Portal Gun Bot is Online :D');
});
client.on('message', async (message) => {
    let charactersResult = await characters.getCharactersByName('rick');
    console.log(charactersResult);
    message.channel.send('olá');
})
client.login('NjM2MDE4NTcyNzE1NDkxMzI4.Xa5glA.-JuQ7d2Ste2KClAnluDsGmBGZ1k');