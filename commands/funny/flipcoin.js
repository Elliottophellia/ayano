const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'flipcoin',
    category: 'funny',
    aliases: [],
    utilisation: '{prefix}flipcoin',
    description: 'Flipcoin game on discord',

    async execute(client, message, args){
        const items = ["HEAD", "TAIL"];
    const toss = items[Math.floor(Math.random() * items.length)];

    const embed = new MessageEmbed()
      .setColor(client.config.app.color)
      .setDescription(`${message.author.username}, started a coin toss`);

    message.channel
      .send({
        embeds: [embed],
      })
      .then((coin) => {
        setTimeout(() => {
          const newEmbed = new MessageEmbed().setDescription("The coin is in the air").setImage("https://www.vertica.com/wp-content/uploads/2019/07/Coin_Flip_183981489-2160.jpg");
          coin.edit({ embeds: [newEmbed] }).catch(() => {});
        }, 5000);
        setTimeout(() => {
          const newEmbed = new MessageEmbed()
            .setDescription(`>> **${toss} WIN** <<`)
            .setImage(toss === "HEAD" ? "https://i.ibb.co/Jjtq8mQ/head.png" : "https://i.ibb.co/V2VLS0x/tail.png");
          coin.edit({ embeds: [newEmbed] }).catch(() => {});
        }, 5000);
      });
    },
};