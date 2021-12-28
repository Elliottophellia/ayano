const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "translate",
  category: "utility",
  aliases: ["gtl"],
  utilisation: "{prefix}translate",
  description: "translate language",

  execute(client, message, args) {
    if (!args[0]) { return message.channel.send("Please input source language! Ex : en");} 
    if (!args[1]) { return message.channel.send("Please input target language! Ex : id");} 
    if (!args.slice(2).join('')) { return message.channel.send("Please input what you want to translate!")}
    var options = {
        method: 'POST',
        url: 'https://libretranslate.de/translate',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {q: `${args.slice(2).join(' ')}`, source: `${args[0]}`, target: `${args[1]}`}
      };
      
      axios.request(options)
      .then(function (response) {
          const embed = new MessageEmbed();
          embed.addField(`**❱ ${args[0]}**`,`${args.slice(2).join(' ')}`, true);
          embed.addField(`**❱ ${args[1]}**`,`${response.data.translatedText}`, true);
          embed.addField('\u200b', 'Find wrong translation? please check your country code [here](http://www.lingoes.net/en/translator/langcode.htm)', false)
          embed.setColor(client.config.app.color);
          message.channel.send({ embeds: [embed] });
      })
      .catch(function (error) {
          console.error(error);
          message.channel.send('Something went wrong, please try again later.')
      });
  },
};
