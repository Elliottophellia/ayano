const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "kiss",
  category: "funny",
  aliases: [],
  utilisation: "{prefix}kiss",
  description: "kiss someone in server",

  async execute(client, message, args) {
    if (!message.mentions.users.first())
      return message.reply("Please mention someone to kiss!");
    if (message.mentions.users.first()) {
      axios
        .get("http://api.rei.my.id/api/kiss/")
        .then((res) => {
          let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .addField("MUAAAAAAAAAAAAAAAH!",`<@${message.mentions.users.first().id}> You got kissed by <@${message.author.id}>!`)
            .setImage(res.data.url)
          message.channel.send({ embeds: [embed] });
        })
        .catch((err) => {
          console.log(err);
          message.channel.send('Something went wrong, please try again later.')
        });
    }
  },
};
