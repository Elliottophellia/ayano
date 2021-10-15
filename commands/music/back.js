module.exports = {
    name: 'back',
    category: 'music',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}...`);

        if (!queue.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}...`);

        await queue.back();

        message.channel.send(`Playing the **previous** track ✅`);
    },
};