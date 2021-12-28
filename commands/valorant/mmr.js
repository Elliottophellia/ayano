const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "valmmr",
  category: "valorant",
  aliases: ["mmr"],
  utilisation: "{prefix}valmmr",

  execute(client, message, args) {
    let profile = args[0]
    let tag = args[1]
    let region = args[2]
    if (!args[0] || !args[1]) {
        return message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: a!valmmr [name] [tag] [region])')
    }
    if (!region) {
        region = 'AP'
        message.channel.send('Because you did not set a region, it will be automatically set to Asia Pacific (AP).')
    }
    axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${profile}/${tag}`)
        .then(function (response) {
            console.log(response.data.data)
            const embed = new MessageEmbed()
            .setTitle(`${profile}'s MMR`)
            .addField('Rank', response.data.data.currenttierpatched.toString(), false)
            .addField('Current MMR', `${response.data.data.ranking_in_tier.toString()} / 100`, false)
            .addField('Last MMR Change', response.data.data.mmr_change_to_last_game.toString(), false)
            .addField('Current Elo', response.data.data.elo.toString(), false)
            .setColor(client.config.app.color)
            message.channel.send({ embeds: [embed] });
        })
        .catch(function (error) {
            try {
                let errorMessage = error.response.data.data.message
                if (errorMessage) return message.channel.send(errorMessage)
            } catch {
                message.channel.send('The User has not played a rank match in the last 20 Matches or queued the wrong region.')
            }
        })
  },
};
