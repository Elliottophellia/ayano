const ms = require('ms');
module.exports = {
    name: 'kick',
    category: "moderator",
    aliases: [],
    utilisation: '{prefix}kick',
    description: "kick someone who against rules",

    execute(client, message, args) {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    },
};