const { MessageEmbed } = require('discord.js');
const { GuessThePokemon } = require("weky");

module.exports = {
    name: 'pokemon',
    category: 'funny',
    aliases: ['pika'],
    utilisation: '{prefix}pokemon',
    description: 'Play guess the pokemon game on discord',

    async execute(client, message, args){
        await GuessThePokemon({
            message: message,
            embed: {
                title: 'Guess The Pokémon',
                description:
                    '**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.',
                color: client.config.app.color,
                footer: 'Guess The Pokemon on discord',
                timestamp: true
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            winMessage:
                'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
            loseMessage: 'Better luck next time! It was a **{{answer}}**.',
            time: 60000,
            incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
            buttonText: 'Cancel'
        });
    },
};