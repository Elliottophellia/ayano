const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "valmap",
  category: "valorant",
  aliases: ["map","mapvalo"],
  utilisation: "{prefix}valmap",

  execute(client, message, args) {
    let mapName = message.content.substring(message.content.indexOf(' ') + 1);
    mapName = mapName.toLowerCase()
    if (!args[0]) return message.channel.send('Please provide a valid map.')
    if (mapName.includes('ascent')) {
        const ascent = new MessageEmbed()

            .addField('ASCENT','[DETAILS](https://blitz.gg/valorant/maps/ascent)',true)
            .setImage('https://i.ibb.co/rkTq2yt/ascent.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [ascent]})
    }

    if (mapName.includes('bind')) {
        const bind = new MessageEmbed()

            .addField('BIND','[DETAILS](https://blitz.gg/valorant/maps/bind)',true)
            .setImage('https://i.ibb.co/C5V5N6c/bind.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [bind]})
    }

    if (mapName.includes('haven')) {
        const haven = new MessageEmbed()

            .addField('HAVEN','[DETAILS](https://blitz.gg/valorant/maps/haven)',true)
            .setImage('https://i.ibb.co/27Zrxm4/haven.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [haven]})
    }

    if (mapName.includes('split')) {
        const split = new MessageEmbed()

            .addField('SPLIT','[DETAILS](https://blitz.gg/valorant/maps/split)',true)
            .setImage('https://i.ibb.co/StDM8km/split.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [split]})
    }

    if (mapName.includes('ice') || mapName.includes('box')) {
        const icebox = new MessageEmbed()

            .addField('ICE BOX','[DETAILS](https://blitz.gg/valorant/maps/icebox)',true)
            .setImage('https://i.ibb.co/8ggbNw1/icebox.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [icebox]})
    }

    if (mapName.includes('breeze')) {
        const split = new MessageEmbed()

            .addField('BREEZE','[DETAILS](https://blitz.gg/valorant/maps/breeze)',true)
            .setImage('https://i.ibb.co/qrjyCYL/breeze.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [split]})
    }

    if (mapName.includes('fracture')) {
        const split = new MessageEmbed()

            .addField('FRACTURE','[DETAILS](https://blitz.gg/valorant/maps/fracture)',true)
            .setImage('https://i.ibb.co/gSf70nZ/fracture.jpg')
            .setColor(client.config.app.color)

        message.channel.send({ embeds: [split]})
    }
  },
};
