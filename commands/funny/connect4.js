const { MessageEmbed } = require('discord.js');
const { Connect4 } = require('discord-gamecord');

module.exports = {
    name: 'connect4',
    category: 'funny',
    aliases: ['connect'],
    utilisation: '{prefix}connect4',
    description: 'Play connect4 game on discord',

    async execute(client, message, args){
        const target = message.mentions.users.first();
        if (target) {
            new Connect4({
                message: message,
                opponent: target,
                embed: {
                  title: 'Connect 4',
                  color: client.config.app.color,
                },
                emojis: {
                  player1: '🔵',
                  player2: '🟡'
                },
                turnMessage: '{emoji} | Its now **{player}** turn!',
                winMessage: '{emoji} | **{winner}** won the game!',
                gameEndMessage: 'The game went unfinished :(',
                drawMessage: 'It was a draw!',
                askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
                cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
                timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
              }).startGame();
        } else {
            return message.reply("Please mention someone to play with you!")
        }
    },
};