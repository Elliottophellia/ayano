const { MessageEmbed } = require('discord.js');
const { ShuffleGuess } = require("weky");

module.exports = {
    name: 'guessname',
    category: 'funny',
    aliases: ['shuffleguess', 'shufflegame'],
    utilisation: '{prefix}guessname',
    description: 'Play ShuffleGuess game on discord',

    async execute(client, message, args){
        const items = ['albedo','aloy','amber','barbara','beidou','bennett','chongyun','diluc','diona','eula','fischl','ganyu','hutao','jean','kaedeharakazuha','kaeya','kamisatoayaka','keqing','klee','kujousara','lisa','mona','ningguang','noelle','qiqi','raidenshogun','razor','rosaria','sangonomiyakokomi','sayu','sucrose','tartaglia','lumine','aether','venti','xiangling','xiao','xingqiu','xinyan','yanfei','yoimiya','zhongli'];
        const toss = items[Math.floor(Math.random() * items.length)];
        await ShuffleGuess({
            message: message,
            embed: {
                title: 'Shuffle Guess Genshin Characters',
                color: client.config.app.color,
                footer: 'ShuffleGuess game on discord',
                timestamp: true
            },
            word: toss,
            button: { cancel: 'Cancel', reshuffle: 'Reshuffle' },
            startMessage:
                'I shuffled a genshin characters name **`{{word}}`**.\nYou have **{{time}}** to find the correct name!',
            winMessage:
                'GG, It was **{{word}}**! You gave the correct answer in **{{time}}.**',
            loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
            incorrectMessage: "No {{author}}! The name isn't `{{answer}}`",
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            time: 60000
        });
    },
};