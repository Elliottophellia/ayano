module.exports = {
    name: 'say',
    category: "moderator",
    aliases: [],
    utilisation: '{prefix}say',
    description: "Let bot copy what you want to say",

    execute(client, message, args) {
        if(args.join(' ')) {
         message.channel.send(args.join(' '));
        } else {
         message.channel.send(`You didn't provided a Text`)
        }
    },
};