const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "valdev",
  category: "valorant",
  aliases: [],
  utilisation: "{prefix}valdev",

  execute(client, message, args) {
    axios.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=dev`)
    .then(function (response) {
        const embed = new MessageEmbed()
        .setTitle('Valorant Updates')
        .setDescription("Here Are The Latest Valorant Updates!")
        .addField(response.data.data[0].title, response.data.data[0].url)
        .addField(response.data.data[1].title, response.data.data[1].url)
        .addField(response.data.data[2].title, response.data.data[2].url)
        .setImage(response.data.data[0].banner_url)
        .setColor(client.config.app.color)

        message.channel.send({ embeds: [embed] });
    })
    .catch(function (error) {
        message.channel.send('Something went wrong, please try again later.')
    })
  },
};
