const { MessageEmbed } = require("discord.js");
const nhentaiApi = require("simple-nhentai").default;
const moment = require("moment");
const axios = require('axios');
const isUrl = require('is-valid-http-url');

module.exports = {
        name: "nhentai",
        category: "utility",
        aliases: ["nh"],
        utilisation: "{prefix}nhentai",
        description: "nhentai doujin zip download",

        async execute(client, message, args) {
                if (!message.channel.nsfw) return message.channel.send("You only can use this command in NSFW channel ❤️.");
                if (!args[0]) return message.channel.send("Please input your nHentai link/code!");
                if (isUrl(args[0])) {
                const pathname = new URL(args[0]).pathname;
                nhentaiApi.g(pathname.split("/")[2]).then(async (manga) => {
                        axios({
                                method: 'post',
                                url: 'https://chiyome.ninja/api/url/add',
                                headers: {
                                        'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
                                        'Content-Type': 'application/json'
                                },
                                data: {
                                        "url": `http://mangadl.rei.my.id:55674/download/nhentai/${pathname.split("/")[2]}/zip`
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
                                                        "url": `http://mangadl.rei.my.id:55674/download/nhentai/${pathname.split("/")[2]}/cbz`
                                                }
                                                })
                                                .then(function (responsx) {
                                                        console.log(responsx.data);
                                                        const embed = new MessageEmbed()
                                                        .setColor(client.config.app.color)
                                                        .setTitle(`${manga.title.main_title.before} ${manga.title.main_title.pretty} ${manga.title.main_title.after}`)
                                                        .setDescription(`${manga.title.sub_title.before} ${manga.title.sub_title.pretty} ${manga.title.sub_title.after}`)
                                                        .addField('Tags :', `${manga.tags.join(", ") || "none"}`, false)
                                                        .addField('Artists :', `${manga.artists.join(", ") || 'none'}`, true)
                                                        .addField('Groups :', ` ${manga.groups.join(", ") || 'none'}`, true)
                                                        .addField('Languages :', `${manga.languages.join(", ") || 'none'}`, true)
                                                        .addField('Categories :', `${manga.categories.join(", ") || 'none'}`, true)
                                                        .addField('Pages :', `${manga.pages || 'none'}`, true)
                                                        .addField('Uploaded :', `${manga.uploaded || 'none' ? moment(manga.uploaded).format("MMMM Do YYYY, h:mm:ss a") : 'none'}`, true)
                                                        .addField('Download:', `[ZIP](${response.data.short}) - [CBZ](${responsx.data.short})`, false)
                                                        .setImage(`${manga.thumbnail}`)
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
        } else {
                nhentaiApi.g(args[0]).then(async (manga) => {
                        axios({
                                method: 'post',
                                url: 'https://chiyome.ninja/api/url/add',
                                headers: {
                                        'Authorization': `Token ${client.config.key.chiyomeAPIKey}`,
                                        'Content-Type': 'application/json'
                                },
                                data: {
                                        "url": `http://mangadl.rei.my.id/download/nhentai/${args[0]}/zip`
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
                                                        "url": `http://mangadl.rei.my.id/download/nhentai/${args[0]}/cbz`
                                                }
                                                })
                                                .then(function (responsx) {
                                                        console.log(responsx.data);
                                                        const embed = new MessageEmbed()
                                                        .setColor(client.config.app.color)
                                                        .setTitle(`${manga.title.main_title.before} ${manga.title.main_title.pretty} ${manga.title.main_title.after}`)
                                                        .setDescription(`${manga.title.sub_title.before} ${manga.title.sub_title.pretty} ${manga.title.sub_title.after}`)
                                                        .addField('Tags :', `${manga.tags.join(", ") || "none"}`, false)
                                                        .addField('Artists :', `${manga.artists.join(", ") || 'none'}`, true)
                                                        .addField('Groups :', ` ${manga.groups.join(", ") || 'none'}`, true)
                                                        .addField('Languages :', `${manga.languages.join(", ") || 'none'}`, true)
                                                        .addField('Categories :', `${manga.categories.join(", ") || 'none'}`, true)
                                                        .addField('Pages :', `${manga.pages || 'none'}`, true)
                                                        .addField('Uploaded :', `${manga.uploaded || 'none' ? moment(manga.uploaded).format("MMMM Do YYYY, h:mm:ss a") : 'none'}`, true)
                                                        .addField('Download:', `[ZIP](${response.data.short}) - [CBZ](${responsx.data.short})`, false)
                                                        .setImage(`${manga.thumbnail}`)
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
        }
        },
};
