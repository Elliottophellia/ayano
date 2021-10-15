const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'useravatar',
    category: 'information',
    aliases: ['avatar', 'logo'],
    utilisation: '{prefix}useravatar',
    description: 'Show user avatar',

    async execute(client, message, args){
        const target = message.mentions.users.first();
        if (target) {
            const embed = new MessageEmbed();
            embed.setColor(client.config.app.color);
            embed.addField("**❱ PNG**",`[\`LINK\`](${target.avatarURL({ dynamic:true, size: 2048, format: "png" })})`, true);
            embed.addField("**❱ JPEG**",`[\`LINK\`](${target.avatarURL({ dynamic:true, size: 2048, format: "jpg" })})`, true);
            embed.addField("**❱ WEBP**",`[\`LINK\`](${target.avatarURL({ dynamic:true, size: 2048, format: "webp" })})`, true);
            embed.setImage(`${target.avatarURL({ dynamic:true, size: 2048 })}`);
            message.channel.send({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed();
            embed.setColor(client.config.app.color);
            embed.addField("**❱ PNG**",`[\`LINK\`](${message.author.avatarURL({ dynamic:true, size: 2048, format: "png" })})`, true);
            embed.addField("**❱ JPEG**",`[\`LINK\`](${message.author.avatarURL({ dynamic:true, size: 2048, format: "jpg" })})`, true);
            embed.addField("**❱ WEBP**",`[\`LINK\`](${message.author.avatarURL({ dynamic:true, size: 2048, format: "webp" })})`, true);
            embed.setImage(`${message.author.avatarURL({ dynamic:true, size: 2048 })}`);
            message.channel.send({ embeds: [embed] });
        }
    },
};