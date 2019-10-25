const axios = require('axios');
const Discord = require('discord.js');
let baseURL = 'https://rickandmortyapi.com/api/character/';
const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 10000
});

module.exports = {
    async getCharactersByNameAndStatus(name, status){
       return await axiosClient.get(`?name=${name}&status=${status}`)
       .then(result => result.data.results)
       .catch(error => {
           throw "Character not found."
       });
    },
    getcharacterEmbed(character){
        let embed = new Discord.RichEmbed()
        embed.addField('**Name:**', character.name, true)
        .addField('**Gender**:', character.gender, true)
        .addField('**Status**:', character.status, true)
        .addField('**Origin**:', character.origin.name, true)
        .addField('**Species:**', character.species, true)
        .addField('**Last Location**:', character.location.name, true)
        .setFooter('RickPortalGunBot', 'https://i.imgur.com/wSTFkRM.png')
        .setImage(character.image)
        .setColor(0x00FF00);
        return embed;
    }
}