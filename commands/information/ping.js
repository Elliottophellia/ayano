const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'information',
    aliases: [],
    utilisation: '{prefix}ping',
    description: 'Pong',

    async execute(client, message, args){
        message.channel.send('\`🏓\` **- Getting my ping ...**').then(result_message => {

			const ping = result_message.createdTimestamp - message.createdTimestamp;
            result_message.delete()
			const latencies = new MessageEmbed()
				.setColor(client.config.app.color)
				.addField(`Ping`, `\`${ping} ms\``)
				.addField(`API Latency`, `\`${Math.round(client.ws.ping)} ms\``)
			message.channel.send({ embeds: [latencies]});
		})
    },
};