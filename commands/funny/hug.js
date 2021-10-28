const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "hug",
  category: "funny",
  aliases: [],
  utilisation: "{prefix}hug",
  description: "hug someone in server",

  async execute(client, message, args) {
    if (!message.mentions.users.first())
      return message.reply("Please mention someone to hug!");
    if (message.mentions.users.first()) {
      axios
        .get("https://api.rei.my.id/api/hug/")
        .then((res) => {
          let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .addField("HAGUUUUUUUUUUUUUUUU!",`<@${message.mentions.users.first().id}> You got hugged by <@${message.author.id}>!`, false)
            .setImage(`${res.data.url}`) 
          message.channel.send({ embeds: [embed] });
        })
        .catch((err) => {
          console.log(err);
          message.channel.send('Something went wrong, please try again later.')
        });
    }
  },
};
