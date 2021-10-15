const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serveravtar',
    category: 'information',
    aliases: ['savatar', 'serverlogo', 'serveravatar'],
    utilisation: '{prefix}serveravtar',
    description: 'Shows the Avatar of a Server',

    async execute(client, message, args){
            const embed = new MessageEmbed();
            embed.setColor(client.config.app.color);
            embed.addField("**❱ PNG**",`[\`LINK\`](${message.guild.iconURL({ dynamic:true, size: 2048, format: "png" })})`, true);
            embed.addField("**❱ JPEG**",`[\`LINK\`](${message.guild.iconURL({ dynamic:true, size: 2048, format: "jpg" })})`, true);
            embed.addField("**❱ WEBP**",`[\`LINK\`](${message.guild.iconURL({ dynamic:true, size: 2048, format: "webp" })})`, true);
            embed.setImage(`${message.guild.iconURL({ dynamic:true, size: 2048 })}`);
            message.channel.send({ embeds: [embed] });
    },
};