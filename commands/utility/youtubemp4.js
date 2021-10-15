const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const getYouTubeID = require('get-youtube-id');
const isUrl = require('is-valid-http-url');

module.exports = {
  name: "ytmp4",
  category: "utility",
  aliases: [],
  utilisation: "{prefix}ytmp4",
  description: "download mp4 from youtube",

  execute(client, message, args) {
    if (!args[0]) { return message.channel.send("Please input the youtube link!");} 
    if (isUrl(args[0])) {
    var id = getYouTubeID(args[0]);
    var options = {
        method: 'GET',
        url: 'https://llsc12.ml/api/v1/getInfo/',
        params: {url: `${id}`},
      };
      axios.request(options)
      .then(function (response) {
          let tamnel = '';
          response.data.videoDetails.thumbnails.forEach(al => {
            console.log(al)
            tamnel += `${al.url}`;
          });
          const embed = new MessageEmbed();
          embed.setTitle('**'+response.data.videoDetails.title+'**')
          embed.setThumbnail(response.data.videoDetails.author.thumbnails[0].url)
          embed.addField(`**❱ DOWNLOAD**`,`**[VIDEO](https://llsc12.ml/api/v1/download?url=${id})**`, true);
          embed.setImage(response.data.videoDetails.thumbnails[1].url)
          embed.setColor(client.config.app.color);
          message.channel.send({ embeds: [embed] });
      })
      .catch(function (error) {
          console.error(error);
          message.channel.send('Something went wrong, please try again later.')
      });
    } else {
        message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!');
    }
  },
};
