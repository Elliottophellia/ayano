const { MessageEmbed } = require('discord.js');
const axios = require("axios");

module.exports = {
    name: 'meme',
    category: 'funny',
    aliases: [],
    utilisation: '{prefix}meme',
    description: 'Repost random meme from reddit',

    async execute(client, message, args){
        axios.get(`https://meme-api.herokuapp.com/gimme`)
            .then(function (res) {
                let embed = new MessageEmbed()
                .setColor(client.config.app.color)
                .setImage(res.data.url)
                message.channel.send({ embeds: [embed] });
            })
            .catch(function (err) {
                console.log(err);
                message.channel.send('Something went wrong, please try again later.')
            })
    },
};