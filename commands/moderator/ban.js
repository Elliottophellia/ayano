const ms = require('ms');
module.exports = {
    name: 'ban',
    category: "moderator",
    aliases: [],
    utilisation: '{prefix}ban',
    description: "ban someone who against rules",

    execute(client, message, args) {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    },
};