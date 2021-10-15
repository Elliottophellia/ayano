module.exports = {
    name: 'unmute',
    category: "moderator",
    aliases: [],
    utilisation: '{prefix}unmute',
    description: "Unmute someone who got Muted",

    execute(client, message, args) {
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    },
};