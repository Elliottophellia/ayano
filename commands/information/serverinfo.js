const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDUIM: "Medium",
    HIGH: "High",
    VERY_HIGH: "Very High"
}

module.exports = {
    name: 'serverinfo',
    category: 'information',
    aliases: ['sinfo'],
    utilisation: '{prefix}serverinfo',
    description: 'Shows server information',

    async execute(client, message, args){
        var clan = message.guild;

        var members = await clan.members.fetch();

        var botSize = members.filter(member => member.user.bot).size;

        var userSize = clan.memberCount - botSize;

        var channels = clan.channels.cache;

        var emojis = clan.emojis.cache;

        var createdAt = moment(message.guild.createdTimestamp).format('LLLL');

        const server_embed = new MessageEmbed()
            .setTitle(`:desktop: SERVER INFORMATION :desktop:`)
            .addField(`Server name`, `\`\`\`${clan.name}\`\`\``, true)
            .addField(`Server owner`, `\`\`\`${clan.ownerId}\`\`\``, true)
            .addField(`Server members [${clan.memberCount}]`,`\`\`\`🙂 Members: ${userSize} | 🤖 Bots: ${botSize}\`\`\``,false)
            .addField(`Server ID`,`\`\`\`${clan.id}\`\`\``,true)
            .addField(`Verification Level`,`\`\`\`${verificationLevels[clan.verificationLevel]}\`\`\``,true)
            .addField(`Server categories and channels [${channels.size}]`,`\`\`\`Categories : ${channels.filter(channel => channel.type === 'GUILD_CATEGORY').size} | Text : ${channels.filter(channel => channel.type === 'GUILD_TEXT').size} | Voice: ${channels.filter(channel => channel.type === 'GUILD_VOICE').size} | Announcement: ${channels.filter(channel => channel.type === 'GUILD_NEWS').size} | Stage: ${channels.filter(channel => channel.type === 'GUILD_STAGE_VOICE').size} | Store: ${channels.filter(channel => channel.type === 'GUILD_STORE').size}\`\`\``,false)
            .addField(`Server emojis [${emojis.size}]`,`\`\`\`Normal: ${emojis.filter(emoji => !emoji.animated).size} | Animated: ${emojis.filter(emoji => emoji.animated).size}\`\`\``,false)
            .addField(`Server boost Level`,`\`\`\`${clan.premuimTier || '0'}\`\`\``,true)
            .addField(`Server boost amount`, `\`\`\`${clan.premuimSubscriptionCount || '0'}\`\`\``, true)
            .addField(`Server created on`,`\`\`\`${createdAt}\`\`\``,false)
            .setThumbnail(clan.iconURL())
            .setColor(client.config.app.color)
           // .setDescription(`\`👤\` \`Owner\` **- <@${clan.ownerId}>**\n\`🙂\` \`Members\` **- \`${clan.memberCount}\`**\n\n\`🤖\` \`Bots\` **- \`${botSize}\`**\n\`👋\` \`Users\` **- \`${userSize}\`**\n\n\`🎉\` \`Roles\` **- \`${clan.roles.cache.size}\`**\n\`📆\` \`Created\` **- \`${createdAt}\`**`)
        return message.channel.send({ embeds: [server_embed] })
    },
};