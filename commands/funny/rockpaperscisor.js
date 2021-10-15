const { MessageEmbed } = require('discord.js');
const { RockPaperScissors } = require("weky");

module.exports = {
    name: 'rps',
    category: 'funny',
    aliases: ['bantuguntingkertas', 'rockpaperscrissor', 'janken'],
    utilisation: '{prefix}rps',
    description: 'Play rock paper scrissor game on discord',

    async execute(client, message, args){
        const target = message.mentions.users.first();
        if (target) {
             RockPaperScissors({
                message: message,
                opponent: target,
                embed: {
                    title: 'Rock Paper Scissors',
                    description: 'Press the button below to choose your element.',
                    color: client.config.app.color,
                    footer: 'Rock Paper Scissors on Discord',
                    timestamp: true
                },
                buttons: {
                    rock: 'Rock',
                    paper: 'Paper',
                    scissors: 'Scissors',
                    accept: 'Accept',
                    deny: 'Deny',
                },
                time: 60000,
                acceptMessage:
                    '<@{{challenger}}> has challenged <@{{opponent}}> for a game of Rock Paper and Scissors!',
                winMessage: 'GG, <@{{winner}}> won!',
                drawMessage: 'This game is deadlock!',
                endMessage: "<@{{opponent}}> didn't answer in time. So, I dropped the game!",
                timeEndMessage:
                    "Both of you didn't pick something in time. So, I dropped the game!",
                cancelMessage:
                    '<@{{opponent}}> refused to have a game of Rock Paper and Scissors with you!',
                choseMessage: 'You picked {{emoji}}',
                noChangeMessage: 'You cannot change your selection!',
                othersMessage: 'Only {{author}} can use the buttons!',
                returnWinner: false
            });
        } else {
            return message.reply("Please mention someone to play with you!")
        }
    },
};