const axios = require('axios');
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
    }
}