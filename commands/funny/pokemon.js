const { MessageEmbed } = require('discord.js');
const { GuessThePokemon } = require('discord-gamecord')

module.exports = {
    name: 'pokemon',
    category: 'funny',
    aliases: ['pika'],
    utilisation: '{prefix}pokemon',
    description: 'Play guess the pokemon game on discord',

    async execute(client, message, args){
        new GuessThePokemon({
            message: message,
            slash_command: false,
            embed: {
              title: 'Who\'s This Pokemon?',
              footer: 'You have only 1 chance',
              color: client.config.app.color,
            },
            time: 60000,
            thinkMessage: '**Thinking...**',
            winMessage: 'Nice! The pokemon was **{pokemon}**',
            stopMessage: 'Better luck next time! It was a **{pokemon}**',
            incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
          }).startGame();
    },
};
