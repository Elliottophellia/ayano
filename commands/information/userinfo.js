const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    category: 'information',
    aliases: ['whois'],
    utilisation: '{prefix}userinfo',
    description: 'Show user userinfo',

    async execute(client, message, args) {
        var user;
        if (args[0] && !message.mentions.users.first()) {
            user = await client.users.fetch(args[0])
            .catch(error => client.error(error, message.channel));
            if (!user) return;
        } else if (message.mentions.users.first()) {
            user = await message.mentions.users.first();
            if (!user) return;
        } else {
            user = message.author;
        }

        var member = message.guild.members.cache.get(user.id);
        
        var createdAt = moment(user.createdTimestamp).format('LLLL');
        var joinAt = moment(member.joinedAt).format('LLLL');

        const user_embed = new MessageEmbed()
            .setTitle(`:busts_in_silhouette: USER INFORMATION :busts_in_silhouette:`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }) || null)
            .setColor(client.config.app.color)
            .addField(`Username`,`\`\`\`${user.tag}\`\`\``, true)
            .addField(`User ID`,`\`\`\`${user.id}\`\`\``, true)
            .addField(`Roles [${member.roles.cache.size - 1}]`,`\`\`\`${member.roles.cache.map(r => r.name).join(', ').replace('@everyone',' ')}\`\`\``, false)
            .addField(`Nickname`,`\`\`\`${member.displayName}\`\`\``, true)
            .addField(`Bot`,`\`\`\`${user.bot ? '✔️' : '❌'}\`\`\``, true)
            .addField(`Account created on`, `\`\`\`${createdAt}\`\`\``, false)
            .addField(`Joined this server on`, `\`\`\`${joinAt}\`\`\``, false)
        return message.channel.send({ embeds: [user_embed] })
    },
};