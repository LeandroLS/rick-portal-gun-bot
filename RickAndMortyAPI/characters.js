const axios = require('axios');
let baseURL = 'https://rickandmortyapi.com/api/character/';
const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 10000
});

module.exports = {
    async getCharactersByName(name){
       return await axiosClient.get(`?name=rick`).then(result => result.data.results);
    }
}