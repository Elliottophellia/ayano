const { MessageEmbed } = require('discord.js');
const { Fight } = require("weky");

module.exports = {
    name: 'fightgame',
    category: 'funny',
    aliases: ['fight','gelud'],
    utilisation: '{prefix}fightgame',
    description: 'Play fight ame on discord',

    async execute(client, message, args){
        const mess = message;
        const opps = message.mentions.users.first();
        await Fight({
            message: mess,
            opponent: opps,
            embed: {
                title: 'Fight Game',
                color: client.config.app.color,
                footer: 'Fight game on discord',
                timestamp: true
            },
            buttons: {
              hit: 'Hit',
              heal: 'Heal',
              cancel: 'Stop',
              accept: 'Accept',
              deny: 'Deny'
            },
            acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
            winMessage: 'GG, <@{{winner}}> won the fight!',
            endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
            cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
            fightMessage: '{{player}} you go first!',
            opponentsTurnMessage: 'Please wait for your opponents move!',
            highHealthMessage: 'You cannot heal if your HP is above 80!',
            lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
            returnWinner: false,
            othersMessage: 'Only {{author}} can use the buttons!'
        });
    },
};
