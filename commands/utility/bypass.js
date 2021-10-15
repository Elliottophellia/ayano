const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "bypassads",
  category: "utility",
  aliases: ["bypassvip", "bypass"],
  utilisation: "{prefix}bypassads",
  description: "Bypass shortlink/adlinks",

  execute(client, message, args) {
    if (args[0]) {
      axios
        .post('https://api.bypass.vip/', {
          url: `${args[0]}`
        })
        .then((res) => {
          const embed = new MessageEmbed();
          embed.setColor(client.config.app.color);
          embed.addField("**❱ SHORTLINK**",`${res.data.query}`, true);
          embed.addField("\u200b",`\u200b`, true);
          embed.addField("**❱ DESTINATION**",`${res.data.destination}`, true);
          message.channel.send({ embeds: [embed] });
        })
        .catch((err) => {
          console.log(err);
          const embed = new MessageEmbed();
          embed.addField("**Something error**",`Maybe our server is down or the url is not supported.`, true);
          message.channel.send({ embeds: [embed] });
        });
    } else {
      message.channel.send("Please input the shortlink!");
    }
  },
};
