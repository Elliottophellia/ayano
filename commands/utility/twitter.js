const { MessageEmbed } = require("discord.js");
const isUrl = require('is-valid-http-url');
const twitterGetUrl = require("twitter-url-direct");

module.exports = {
  name: "twitter",
  category: "utility",
  aliases: ["twdl"],
  utilisation: "{prefix}twitter",
  description: "twitter video downloader",

  async execute(client, message, args) {
    const link = args[0];
    if (!link) return message.channel.send('Please provide a twitter link!.')
    if (isUrl(link)) {
      const response = await twitterGetUrl(`${link}`);
      if (response?.type === "image") return message.channel.send("The input is not a valid video link!")
      let panjangarray = response.download.length;
      if (panjangarray >= 1) {
        const embed = new MessageEmbed()
        embed.setColor(client.config.app.color)
        embed.setTitle(`Twitter Video Downloader`)
        let linkdownload = ''
        for (let i = 0; i < panjangarray; i++) {
          //console.log(response.download[i]);
          linkdownload += `- [${response.download[i].dimension || 'Download'}](${response.download[i].url}) -`
        }
        embed.addField(`**Download Link**`, `${linkdownload}`)
        message.channel.send({ embeds: [embed] });
      } else {
        message.channel.send('Something went wrong, please try again later.')
      }
    }
    else {
      message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nExample : `https://twitter.com/masimasi0/status/1464764134138925063`!');
    }
  },
};
