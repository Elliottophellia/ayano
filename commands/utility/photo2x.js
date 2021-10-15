const { MessageEmbed } = require("discord.js");
const deepai = require('deepai');
deepai.setApiKey(client.config.key.deepaiAPIKey);
const isUrl = require('is-image-url');
const imgbbUploader = require('imgbb-uploader');

module.exports = {
  name: "photo2x",
  category: "utility",
  aliases: ["p2x", "photox"],
  utilisation: "{prefix}photo2x",
  description: "Double size your photo without losing its content and defining characteristics!",

  async execute(client, message, args) {
    const attachment = message.attachments.first();
    var gambar;
    if (isUrl(args[0]) && !attachment) {
        gambar = await args[0];
        if (!gambar) return;
    } else if (!args[0] && attachment) {
        gambar = await attachment ? attachment.url : null;
        if (!gambar) return;
    } else {
        return message.channel.send("Please input your image!")
    }
    var res = await deepai.callStandardApi("torch-srgan", {
        image: gambar
    }).catch((err) => {
        console.error(err) 
        return message.channel.send('Something went wrong, please try again later.') 
    });
    const random = Math.floor((Math.random() * 99999) + 1);
    const option = { 
            apiKey: `${client.config.key.imgbbAPIKey}`,
            imageUrl: `${res.output_url}`,
            name: `ayano_bot_photo2x_${random}`
        }
        imgbbUploader(option)
        .then((ress) => {
            let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .setTitle('Super Resolution AI')
            .setDescription('The Super Resolution AI uses machine learning to clarify, sharpen, and upscale the photo without losing its content and defining characteristics. Blurry images are unfortunately common and are a problem for professionals and hobbyists alike. Super resolution uses machine learning techniques to upscale images in a fraction of a second.')
            .addField(`**❱ DOWNLOAD**`,`[DIRECT](${res.output_url}) - [IMGBB](${ress.url})`,false)
            .setImage(ress.url)
            message.channel.send({ embeds: [embed] });
        })
        .catch((errr) => {
            console.error(errr) 
            message.channel.send('Something went wrong, please try again later.') 
        });
  },
};
