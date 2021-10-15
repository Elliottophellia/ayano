const { MessageEmbed } = require("discord.js");
const deepai = require('deepai');
deepai.setApiKey(client.config.key.deepaiAPIKey);
const isUrl = require('is-image-url');
const imgbbUploader = require('imgbb-uploader');

module.exports = {
  name: "waifu2x",
  category: "utility",
  aliases: ["w2x"],
  utilisation: "{prefix}waifu2x",
  description: "Double size your waifu image without losing its content and defining characteristics!",

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
        return message.channel.send("Please input your waifu image!")
    }
    var res = await deepai.callStandardApi("waifu2x", {
        image: gambar
    }).catch((err) => {
        console.error(err) 
        return message.channel.send('Something went wrong, please try again later.') 
    });
    const random = Math.floor((Math.random() * 99999) + 1);
    const option = { 
            apiKey: `${client.config.key.imgbbAPIKey}`,
            imageUrl: `${res.output_url}`,
            name: `ayano_bot_waifu2x_${random}`
        }
        imgbbUploader(option)
        .then((ress) => {
            let embed = new MessageEmbed()
            .setColor(client.config.app.color)
            .setTitle('Waifu2x AI')
            .setDescription('Waifu2x is an algorithm that upscales images while reducing noise within the image. It gets its name from the anime-style art known as waifu that it was largely trained on. Even though waifus made up most of the training data, this waifu2x ai still performs well on photographs and other types of imagery. You can use Waifu2x to double the size of your images while reducing noise.')
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
