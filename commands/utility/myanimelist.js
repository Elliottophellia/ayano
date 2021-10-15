const { MessageEmbed } = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "mal",
  category: "utility",
  aliases: ["animesearch", "myanimelist"],
  utilisation: "{prefix}mal",
  description: "Display anime info from myanimelist",

  async execute(client, message, args) {
    let search = args.join(" ");
    if (!search) return message.channel.send('Please input anime name!');

    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new MessageEmbed()
        .setThumbnail(data.picture)
        .setColor(client.config.app.color)
        .setTitle(data.englishTitle || data.title)
        .setDescription(data.japaneseTitle)
        .addField('Type', data.type || 'none', true)
        .addField('Episodes', data.episodes || 'none', true)
        .addField('Rating', data.rating || 'none', true)
        .addField('Aired', data.aired || 'none', true)
        .addField('Score', data.score || 'none', true)
        .addField('Score Stats', data.scoreStats || 'none', true)
        .addField('Synopsis', data.synopsis)
        message.channel.send({ embeds: [malEmbed] });
      })
  },
};
