const { MessageEmbed } = require('discord.js');
const { Snake } = require("weky");

module.exports = {
    name: 'snake',
    category: 'funny',
    aliases: ['snakegame'],
    utilisation: '{prefix}snake',
    description: 'Play snake game on discord',

    async execute(client, message, args){
        await Snake({
            message: message,
            embed: {
                title: 'Snake Game',
                description: 'GG, you scored **{{score}}** points!',
                color: client.config.app.color,
                footer: 'Snake Game on Discord',
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟩',
                food: '🍎',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttonText: 'Cancel'
        });
    },
};