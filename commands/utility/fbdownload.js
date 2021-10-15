const { MessageEmbed } = require("discord.js");
const isUrl = require('is-valid-http-url');
const fbvid = require('fbvideos');

module.exports = {
  name: "facebook",
  category: "utility",
  aliases: ["fbdl"],
  utilisation: "{prefix}facebook",
  description: "facebook video downloader",

  async execute(client, message, args) {
    const link = args[0];
    if (!link) return message.channel.send('Please provide a facebook link!.')
    if (isUrl(link)) {
        fbvid.high(link).then(vidd => {
        fbvid.low(link).then(vid => {
            console.log(vid+'\n\n'+vidd)
            const embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .addField("**❱ HD**",`[DOWNLOAD](${vidd.url})`, true)
            .addField("\u200b",`\u200b`, true)
            .addField("**❱ SD**",`[DOWNLOAD](${vid.url})`, true)
            message.channel.send({ embeds: [embed] });
        })
        .catch(function (error) {
          console.error(error);
          message.channel.send('Something went wrong, please try again later.')
      });
    })
    .catch(function (error) {
      console.error(error);
      message.channel.send('Something went wrong, please try again later.')
  });
    } 
    else {
        message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!');
      }
},
};
