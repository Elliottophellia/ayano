const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'covid',
    category: 'information',
    aliases: ['c19', 'covid19'],
    utilisation: '{prefix}covid',
    description: 'Display all covid-19 case in Indonesia',

    execute(client, message, args) {
        axios.all([
            axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`),
            axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi`)
          ])
            .then(axios.spread((covidid, covidprov) => {
            const embed = new MessageEmbed();
            embed.setColor(client.config.app.color);
            embed.setTitle("Data Covid-19 di Indonesia");
            embed.setDescription(`\u200b`);
            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png");
            embed.addFields(
                { name: 'Positif', value: `${covidid.data.positif}`, inline: true },
                { name: 'Sembuh', value: `${covidid.data.sembuh}`, inline: true },
                { name: 'Meninggal', value: `${covidid.data.meninggal}`, inline: true },
                { name: '\u200b', value: '\u200b' },
                { name: 'Data Covid-19 di setiap Provinsi', value: '\u200b' },
            );
            for(i = 0; i <= 33; i++) {
                embed.addField(`${covidprov.data[i].provinsi}`, `Positif: ${covidprov.data[i].kasus}\r\nSembuh: ${covidprov.data[i].sembuh}\r\nMeninggal: ${covidprov.data[i].meninggal}`, true)
            }
            message.channel.send({ embeds: [embed] });
        }))
            .catch((err) => {
                message.channel.send('Something went wrong, please try again later.')
        })
    },
};