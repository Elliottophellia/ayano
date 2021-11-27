const { MessageEmbed } = require("discord.js");
const tiktok = require('tiktok-scraper');
const isUrl = require('is-valid-http-url');
const axios = require('axios');

module.exports = {
  name: "tiktok",
  category: "utility",
  aliases: [],
  utilisation: "{prefix}tiktok",
  description: "download tiktok video",

  execute(client, message, args) {
    if (!args[0]) { return message.channel.send("Please input valid tiktok link!"); }
    if (isUrl(args[0])) {
      tiktok.getVideoMeta(args[0]).then(async (video) => {
        axios({
          method: 'post',
          url: 'https://chiyome.ninja/api/url/add',
          headers: {
            'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
            'Content-Type': 'application/json'
          },
          data: {
            "url": `${video.collector[0].videoUrl}`
          }
        })
          .then(function (responsx) {
            const embed = new MessageEmbed();
            embed.setTitle(`**${video.collector[0].authorMeta.nickName} (@${video.collector[0].authorMeta.name})**`)
            embed.setDescription(`${video.collector[0].text}`)
            embed.setThumbnail(video.collector[0].imageUrl)
            embed.addField(`**❱ DOWNLOAD**`, `**[MP4](${responsx.data.short})**`, true);
            embed.setColor(client.config.app.color);
            message.channel.send({ embeds: [embed] });
          })
          .catch(function (errox) {
            console.log(errox);
          });
      });
    } else {
      message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nExample : https://www.tiktok.com/@nnaemie/video/7028491495388777755');
    }
  },
};
