const { MessageEmbed } = require("discord.js");
const fxc7Tiktok = require("fxc7-tiktok");
const isUrl = require('is-valid-http-url');

module.exports = {
  name: "tiktok",
  category: "utility",
  aliases: [],
  utilisation: "{prefix}tiktok",
  description: "download tiktok video",

  execute(client, message, args) {
    if (!args[0]) { return message.channel.send("Please input valid tiktok link!");} 
    if (isUrl(args[0])) {
        fxc7Tiktok.tiktok(args[0])
        .then(res => {
            const embed = new MessageEmbed()
            .setTitle(res.seoProps.metaParams.title)
            .setDescription(res.seoProps.metaParams.description)
            .addField(`**❱ DOWNLOAD**`,`**[LINK1](${res.itemInfo.itemStruct.video.playAddr})** - **[LINK2](${res.itemInfo.itemStruct.video.downloadAddr})**`, true)
            .setThumbnail(res.itemInfo.itemStruct.video.originCover)
            .setColor(client.config.app.color)
            message.channel.send({ embeds: [embed] });
        }).catch(err => {
            console.log(err)
            message.channel.send('Something went wrong, please try again later.')
        })
    } else {
        message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!');
    }
  },
};
