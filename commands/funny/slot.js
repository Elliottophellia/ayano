const { MessageEmbed } = require('discord.js');
const { Slots } = require('discord-gamecord');

module.exports = {
    name: 'slot',
    category: 'funny',
    aliases: ['ngeslot'],
    utilisation: '{prefix}slot',
    description: 'Play slot game on discord',

    async execute(client, message, args){
        new Slots({
            message: message,
            slash_command: false,
            embed: {
                title: '🎰 Slot Machine',
                color: client.config.app.color
            }
        }).startGame();
    },
};