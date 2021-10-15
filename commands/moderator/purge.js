module.exports = {
    name: 'purge',
    category: "moderator",
    aliases: [],
    utilisation: '{prefix}purge',
    description: "Purge up to 99 messages.",

    execute(client, message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).then(res => {
            message.channel.send(`Successfully prune ${res.size} messages in this channel!`);
        }).catch(err => {
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    },
};