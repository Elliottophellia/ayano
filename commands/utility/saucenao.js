const { MessageEmbed } = require("discord.js");
const sagiri = require('sagiri');
const izumi = sagiri(client.config.key.saucenaoAPI)
const isImageUrl = require('is-image-url');

module.exports = {
  name: "saucenao",
  category: "utility",
  aliases: ["sauce","wait"],
  utilisation: "{prefix}saucenao",
  description: "Find spicy sauce from internet",

  async execute(client, message, args) {
    const attachment = message.attachments.first();
    var gambar;
    if (isImageUrl(args[0]) && !attachment) {
        gambar = await args[0];
        if (!gambar) return;
    } else if (!args[0] && attachment) {
        gambar = await attachment ? attachment.url : null;
        if (!gambar) return;
    } else {
        return message.channel.send("Please input your image!")
    }
    const results = await izumi(gambar);
    const minSimilarity = 70;
    if (minSimilarity <= ~~results[0].similarity) {
      if(results[0].site == 'Danbooru') {
         console.log(results[0])
         let embed = new MessageEmbed()
         embed.setColor(client.config.app.color)
         embed.addField(`Source`, `${results[0].site}`, false)
         embed.addField(`\u200b`, `\u200b`, false)
         embed.addField(`Similarity`, `${results[0].raw.header.similarity}%`, true)
         embed.addField(`Author`, `${results[0].raw.data.creator}`, true)
         if (results[0].raw.data.material) {
         embed.addField(`\u200b`, `\u200b`, false)
         embed.addField(`Material`, `${results[0].raw.data.material}`, true)
         embed.addField(`Characters`, `${results[0].raw.data.characters}`, true)
         }
         embed.addField(`\u200b`, `\u200b`, false)
         embed.addField(`Danbooru url`, `[Danbooru](${results[0].url})`, true)
         embed.addField(`Source url`, `[Source](${results[0].raw.data.source})`, true)
         embed.setImage(results[0].raw.header.thumbnail)
         message.channel.send({ embeds: [embed] });
      }
      else if (results[0].site == 'AniDB') {   
         console.log(results[0])
         let embed = new MessageEmbed()
         .setColor(client.config.app.color)
         .addField(`Source`, `${results[0].raw.data.source}`, false)
         .addField(`\u200b`, `\u200b`, false)
         .addField(`Similarity`, `${results[0].raw.header.similarity}%`, true)
         .addField(`Part/EP`, `${results[0].raw.data.part}`, true)
         .addField(`\u200b`, `\u200b`, false)
         .addField(`Release`, `${results[0].raw.data.year}`, true)
         .addField(`Time Stamp`, `${results[0].raw.data.est_time}`, true)
         .setImage(results[0].raw.header.thumbnail)
         message.channel.send({ embeds: [embed] });
      } 
      else if (results[0].site == 'Pixiv') {
         console.log(results[0])
         let embed = new MessageEmbed()
         .setColor(client.config.app.color)
         .addField(`Source`, `${results[0].raw.data.title}`, false)
         .addField(`\u200b`, `\u200b`, false)
         .addField(`Similarity`, `${results[0].raw.header.similarity}%`, true)
         .addField(`Author`, `${results[0].authorName}`, true)
         .addField(`\u200b`, `\u200b`, false)
         .addField(`Pixiv url`, `[Pixiv](${results[0].url})`, true)
         .addField(`Author url`, `[${results[0].authorName}](${results[0].authorUrl})`, true)
         .setImage(results[0].raw.header.thumbnail)
         message.channel.send({ embeds: [embed] });
      }
      else {
         return message.channel.send('Something went wrong, please try again later.') 
      }
    }
    else {
      message.channel.send('No sauce found! this bot works only with uncropped anime/2d art');
    }
  },
};
