const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    category: 'core',
    aliases: ['h'],
    utilisation: '{prefix}help',
    description: 'Returns all Commmands, or one specific command',

    execute(client, message, args) {

        const embed = new MessageEmbed();
       
        embed.setColor(client.config.app.color);
        embed.setTitle("Sugiura Ayano");
        embed.setDescription(`Ayano is the current Student Council Vice President who is known to be secretly in love with Toshino Kyoko, whom she always refers to by her full name, usually in the form of an interjection.`);
        embed.setImage('https://raw.githubusercontent.com/Eilaluth/Ayano/main/img/ayanoxkyoko.png');
        
        const informations = client.commands.filter(x => x.category === "information");
        const information = informations.map(x => `${x.name}`).join('\n');
        embed.addField(`**INFORMATION** - ${informations.size - 1}`, `\`\`\`${information}\`\`\``, true);

        const moderations = client.commands.filter(x => x.category === "moderator");
        const moderation = moderations.map(x => `${x.name}`).join('\n');
        embed.addField(`**MODERATOR** - ${moderations.size - 1}`, `\`\`\`${moderation}\`\`\``, true);

        const valorants = client.commands.filter(x => x.category === "valorant");
        const valorant = valorants.map(x => `${x.name}`).join('\n');
        embed.addField(`**VALORANT** - ${valorants.size - 1}`, `\`\`\`${valorant}\`\`\``, true);

        const utilitys = client.commands.filter(x => x.category === "utility");
        const utility = utilitys.map(x => `${x.name}`).join('\n');
        embed.addField(`**UTILITY** - ${utilitys.size - 1}`, `\`\`\`${utility}\`\`\``, true);

        const funnys = client.commands.filter(x => x.category === "funny");
        const funny = funnys.map(x => `${x.name}`).join('\n');
        embed.addField(`**FUNNY** - ${funnys.size - 1}`, `\`\`\`${funny}\`\`\``, true);

        const musics = client.commands.filter(x => x.category === "music");
        const music = musics.map(x => `${x.name}`).join('\n');
        embed.addField(`**MUSIC** - ${musics.size - 1}`, `\`\`\`${music}\`\`\``, true);

        embed.setFooter(`Visit our page at ayano.rei.my.id for details on a command`)

        message.channel.send({ embeds: [embed] });
    },
};