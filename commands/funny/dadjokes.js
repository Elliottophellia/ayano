const axios = require("axios");

module.exports = {
    name: 'dadjokes',
    category: 'funny',
    aliases: ['dad', 'dadjoke'],
    utilisation: '{prefix}dadjokes',
    description: 'Random dad jokes',

    async execute(client, message, args){
        axios.get("https://icanhazdadjoke.com/", {
          headers: {
            "User-Agent": "Ayano Sugiura (https://github.com/Eilaluth/ayano)",
            "accept": "application/json",
          },
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
