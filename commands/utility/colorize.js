const { MessageEmbed } = require("discord.js");
const deepai = require('deepai');
deepai.setApiKey(client.config.key.deepaiAPIKey);
const isUrl = require('is-image-url');
const imgbbUploader = require('imgbb-uploader');

module.exports = {
  name: "colorize",
  category: "utility",
  aliases: ["warnain", "colorized"],
  utilisation: "{prefix}colorize",
  description: "Colorized black and white image.",

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
        return message.channel.send("Please input your old image!")
    }
    var res = await deepai.callStandardApi("colorizer", {
        image: gambar
    }).catch((err) => {
        console.error(err) 
        return message.channel.send('Something went wrong, please try again later.') 
    });
    const random = Math.floor((Math.random() * 99999) + 1);
    const option = { 
            apiKey: `${client.config.key.imgbbAPIKey}`,
            imageUrl: `${res.output_url}`,
            name: `ayano_bot_colorizer_${random}`
        }
        imgbbUploader(option)
        .then((ress) => {
            let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .setTitle('Image Colorization AI')
            .setDescription('Colorize black and white images or videos using the image colorization AI. Add color to old family photos and historic images, or bring an old film back to life with colorization.')
            .addField(`**❱ DOWNLOAD**`,`[DIRECT](${res.output_url}) [IMGBB](${ress.url})`,false)
            .setImage(ress.url)
            message.channel.send({ embeds: [embed] });
        })
        .catch((errr) => {
            console.error(errr) 
            message.channel.send('Something went wrong, please try again later.') 
        });
  },
};
