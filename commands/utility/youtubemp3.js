const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const getYouTubeID = require('get-youtube-id');
const isUrl = require('is-valid-http-url');

module.exports = {
  name: "ytmp3",
  category: "utility",
  aliases: [],
  utilisation: "{prefix}ytmp3",
  description: "download mp3 from youtube",

  execute(client, message, args) {
    if (!args[0]) { return message.channel.send("Please input the youtube link!");} 
    if (isUrl(args[0])) {
    var id = getYouTubeID(args[0]);
    var options = {
        method: 'GET',
        url: 'http://youtube.rei.my.id/api/v1/getInfo/',
        params: {url: `${id}`},
      };
      axios.request(options)
      .then(function (response) {
        axios({
          method: 'post',
          url: 'https://chiyome.ninja/api/url/add',
          headers: {
                  'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
                  'Content-Type': 'application/json'
          },
          data: {
                  "url": `http://youtube.rei.my.id/api/v1/audio?url=${id}`
          }
          })
          .then(function (responsx) { 
            let tamnel = '';
            response.data.videoDetails.thumbnails.forEach(al => {
              tamnel += `${al.url}`;
            });
            const embed = new MessageEmbed();
            embed.setTitle('**'+response.data.videoDetails.title+'**')
            embed.setThumbnail(response.data.videoDetails.author.thumbnails[0].url)
            embed.addField(`**❱ DOWNLOAD**`,`**[MP3](${responsx.data.short})**`, true);
            embed.setImage(response.data.videoDetails.thumbnails[1].url)
            embed.setColor(client.config.app.color);
            message.channel.send({ embeds: [embed] });
          } )
          .catch(function (errox) {
            console.log(errox);
          });
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
