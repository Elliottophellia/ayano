const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "wikipedia",
  category: "utility",
  aliases: ["wiki"],
  utilisation: "{prefix}wikipedia",
  description: "Search wikipedia page",

  async execute(client, message, args) {
    const wiki = args.join(' ')
    if(!wiki) return message.reply('Provide A Query To Search.')
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`;
    axios
    .get(url)
    .then((res) => {
      const embed = new MessageEmbed()
      .setColor(client.config.app.color)
      .setTitle(res.data.title)
      .setDescription(res.data.extract)
      .setThumbnail(res.data.originalimage.source)
      message.channel.send({ embeds: [embed] });
    })
    .catch((err) => {
      console.log(err)
      message.channel.send('Something went wrong, please try again later.')
    });
  },
};
