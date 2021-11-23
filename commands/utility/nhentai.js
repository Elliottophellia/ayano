const { MessageEmbed } = require("discord.js");
const API = require('kasu.nhentaiapi.js');
const axios = require('axios');
const api = new API();

module.exports = {
        name: "nhentai",
        category: "utility",
        aliases: ["nh"],
        utilisation: "{prefix}nhentai",
        description: "nhentai doujin zip download",

        async execute(client, message, args) {
                if (!message.channel.nsfw) return message.channel.send("You only can use this command in NSFW channel ❤️.");
                if (!args[0]) return message.channel.send("Please input your nHentai link/code!");
                api.getID(args[0]).json(data => {
                        axios({
                                method: 'post',
                                url: 'https://chiyome.ninja/api/url/add',
                                headers: {
                                        'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
                                        'Content-Type': 'application/json'
                                },
                                data: {
                                        "url": `https://mangadl.herokuapp.com/download/nhentai/${data.id}/zip`
                                }
                                })
                                .then(function (response) {
                                        console.log(response.data);
                                        axios({
                                                method: 'post',
                                                url: 'https://chiyome.ninja/api/url/add',
                                                headers: {
                                                        'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
                                                        'Content-Type': 'application/json'
                                                },
                                                data: {
                                                        "url": `https://mangadl.herokuapp.com/download/nhentai/${data.id}/cbz`
                                                }
                                                })
                                                .then(function (responsx) {
                                                        console.log(responsx.data);
                                                        const embed = new MessageEmbed()
                                                        .setColor(client.config.app.color)
                                                        .setTitle(data.title.translated || ' ')
                                                        .setDescription(data.title.origin || ' ')
                                                        .addField('Tags :', `${data.tag_table.tag || 'none'}`, false)
                                                        .addField('Artists :', `${data.tag_table.artist || 'none'}`, true)
                                                        .addField('Groups :', `${data.tag_table.groups || 'none'}`, true)
                                                        .addField('Languages :', `${data.tag_table.languages || 'none'}`, true)
                                                        .addField('Categories :', `${data.tag_table.categories || 'none'}`, true)
                                                        .addField('Pages :', `${data.number_pages || 'none'}`, true)
                                                        .addField('Uploaded :', `${data.uploaded || 'none'}`, true)
                                                        .addField('Download:', `[ZIP](${response.data.short}) - [CBZ](${responsx.data.short})`, false)
                                                        .setImage(data.images.cover)
                                                        message.channel.send({ embeds: [embed] });
                                                })
                                                .catch(function (error) {
                                                        console.log(error);
                                                });
                                })
                                .catch(function (error) {
                                        console.log(error);
                                });
                })
        },
};
