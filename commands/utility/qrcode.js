const { MessageEmbed } = require("discord.js");
const isUrl = require('is-valid-http-url');
const imgbbUploader = require('imgbb-uploader');

module.exports = {
  name: "qrcode",
  category: "utility",
  aliases: ["qr"],
  utilisation: "{prefix}qrcode",
  description: "qrcode code generator",

  async execute(client, message, args) {
    const link = args[0];
    if (!link) return message.channel.send('Please provide a link.')
    if (isUrl(link)) {
    const random = Math.floor((Math.random() * 99999) + 1);
    const qrcodelink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`;
    const option = { 
        apiKey: `${client.config.key.imgbbAPIKey}`,
        imageUrl: `${qrcodelink}`,
        name: `ayano-bot-qrcode-${random}`
    }
    imgbbUploader(option)
    .then((ress) => {
        let embed = new MessageEmbed()
        .setColor(client.config.app.color)
        .setTitle(`Generated QRCode!`)
        .addField(`**❱ DOWNLOAD**`,`[DIRECT](${qrcodelink}) - [IMGBB](${ress.url})`,false)
        .setImage(ress.url)
        message.channel.send({ embeds: [embed] });
    })
    .catch((errr) => {
        console.error(errr) 
        message.channel.send('Something went wrong, please try again later.') 
    });
    } 
    else {
        message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!');
      }
},
};
