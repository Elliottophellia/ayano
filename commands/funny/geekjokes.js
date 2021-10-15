const axios = require("axios");

module.exports = {
    name: 'geekjokes',
    category: 'funny',
    aliases: ['geek'],
    utilisation: '{prefix}geekjokes',
    description: 'Random geek jokes',

    async execute(client, message, args){
        axios.get(`https://geek-jokes.p.rapidapi.com/api`, {
            params: {format: 'json'},
            headers: {
              'x-rapidapi-host': 'geek-jokes.p.rapidapi.com',
              'x-rapidapi-key': client.config.key.rapidAPI
            }
        })
        .then(function (res) {
                message.channel.send(`${res.data.joke}`)
        })
        .catch(function (err) {
                console.log(err);
                message.channel.send('Something went wrong, please try again later.')
        })
    },
};