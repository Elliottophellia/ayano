const { MessageEmbed } = require("discord.js");
const deepai = require('deepai');
deepai.setApiKey(client.config.key.deepaiAPIKey);
const isUrl = require('is-image-url');
const imgbbUploader = require('imgbb-uploader');

module.exports = {
  name: "toonify",
  category: "utility",
  aliases: ["cartoon", "kartun"],
  utilisation: "{prefix}toonify",
  description: "Convert your photo to cartoon like style!",

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
    var res = await deepai.callStandardApi("toonify", {
        image: gambar
    }).catch((err) => {
        console.error(err) 
        return message.channel.send('Something went wrong, please try again later.') 
    });
    const random = Math.floor((Math.random() * 99999) + 1);
    const option = { 
            apiKey: `${client.config.key.imgbbAPIKey}`,
            imageUrl: `${res.output_url}`,
            name: `ayano_bot_toonify_${random}`
        }
        imgbbUploader(option)
        .then((ress) => {
            let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .setTitle('Toonify AI')
            .setDescription('Turn a photo of any face into a cartoon instantly with artificial intelligence. Toonify uses a convolutional neural network to quickly transform the photo into a cartoon. While generative adversarial networks (GANs) were used in the creation of Toonify, they are not used in the final model.')
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
