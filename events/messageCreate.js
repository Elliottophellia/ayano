
module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.app.px;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    const DJ = client.config.opt.DJ;
    const MOD = client.config.opt.MOD;
    const ADMN = client.config.opt.ADMN;

    if (cmd && DJ.enabled && DJ.commands.includes(cmd.name)) {
        const roleDJ = message.guild.roles.cache.find(x => x.name === DJ.roleName);

        if (!message.member._roles.includes(roleDJ.id)) {
            return message.channel.send(`This command is reserved for members with the ${DJ.roleName} role on the server ${message.author}... `);
        }
    }

    if (cmd && MOD.enabled && MOD.commands.includes(cmd.name)) {

        if (!message.member.permissions.has("MUTE_MEMBERS")) {
            return message.channel.send(`This command is reserved for members with the moderation role on the server ${message.author}... `);
        }
    }
    if (cmd && ADMN.enabled && ADMN.commands.includes(cmd.name)) {

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            return message.channel.send(`This command is reserved for members with the administrator role on the server ${message.author}... `);
        }
    }

    if (cmd && cmd.voiceChannel) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${message.author}... `);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel ${message.author}... `);
    }
    if (cmd) cmd.execute(client, message, args);
};