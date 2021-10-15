const { MessageEmbed } = require('discord.js');
const { TicTacToe } = require('discord-gamecord');

module.exports = {
    name: 'tictactoe',
    category: 'funny',
    aliases: ['ttt'],
    utilisation: '{prefix}tictactoe',
    description: 'Play tic tac toe game on discord',

    async execute(client, message, args){
        const target = message.mentions.users.first();
        if (target) {
        new TicTacToe({
            message: message,
            opponent: target,
            embed: {
              title: 'Tic Tac Toe',
              color: client.config.app.color,
            },
            oEmoji: '🔵', 
            xEmoji: '❌',
            oColor: 'PRIMARY',
            xColor: 'DANGER',
            turnMessage: '{emoji} | Its now **{player}** turn!',
            waitMessage: 'Waiting for the opponent...',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
            cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
            drawMessage: 'It was a draw!',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
          }).startGame();
        } else {
            return message.reply("Please mention someone to play with you!")
        }
    },
};