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
        url: 'https://youtube-to-mp32.p.rapidapi.com/api/yt_to_mp3',
        params: {video_id: `${id}`},
        headers: {
          'x-rapidapi-host': 'youtube-to-mp32.p.rapidapi.com',
          'x-rapidapi-key': client.config.key.rapidAPI
        }
      };
      axios.request(options)
      .then(function (response) {
          const embed = new MessageEmbed();
          embed.setTitle('**'+response.data.Title+'**')
          embed.addField(`**❱ DOWNLOAD**`,`**[AUDIO](${response.data.Download_url})**`, true);
          embed.setThumbnail(response.data.Video_Thumbnail)
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