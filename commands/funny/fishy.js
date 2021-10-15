const { MessageEmbed } = require('discord.js');
const { Fishy } = require('discord-gamecord');

module.exports = {
    name: 'fishing',
    category: 'funny',
    aliases: ['mancing'],
    utilisation: '{prefix}fishing',
    description: 'Play fishing game on discord',

    async execute(client, message, args){
        new Fishy({
            message: message,
            fishyMessage: 'You caught a {fish}. I bet it\'d sell for around ${worth}.',
            returnMessage: false
          }).startGame();
    },
};