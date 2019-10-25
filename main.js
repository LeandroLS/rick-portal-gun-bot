const Discord = require('discord.js');
const client = new Discord.Client();
const characters = require('./RickAndMortyAPI/characters');
require('dotenv').config();
const helper = require('./helper.js');
let prefix = '!r'
client.on('ready', async () => {
    console.log('Rick Portal Gun Bot is Online :D');
});
client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    let messageParams = message.content.toLowerCase().split(' ');
    if(messageParams.length != 3){
        let embed = new Discord.RichEmbed()
        embed.addField('**Error**', "Missing parameters on this command")
        .setColor("#FF0000");
        message.channel.send(embed)
        return;
    }

    let characterName = messageParams[1];

    if(!helper.thisStatusExists(messageParams[2])){
        let embed = new Discord.RichEmbed()
        embed.addField('**Error**', `This status parameter don't exists. Status informed: ${messageParams[2]}`)
        .addField('**Available Status:**', `dead, alive, unknown`)
        .setColor("#FF0000");
        message.channel.send(embed)
        return;
    }

    let characterStatus = messageParams[2];

    try {
        let charactersResult = await characters.getCharactersByNameAndStatus(characterName, characterStatus);
        charactersResult.forEach(character => {        
            let embed = characters.getcharacterEmbed(character);
            message.channel.send(embed);
        });
    } catch (error) {
        let embed = new Discord.RichEmbed()
        embed.addField('**Error**', error)
        .setColor("#FF0000");
        message.channel.send(embed)
    }

});
client.login(process.env.DISCORD_API_KEY);