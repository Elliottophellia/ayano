const { MessageEmbed } = require("discord.js");
const valorant = require('valorant-fetch');

module.exports = {
  name: "valagent",
  category: "valorant",
  aliases: ["agent"],
  utilisation: "{prefix}valagent",

  async execute(client, message, args) {
    if (!args[0]) return message.channel.send('Please input agent name!');
    let agent = args[0]
    agent = agent.toLowerCase()
    if (agent === 'breach'
        || agent === 'brimstone'
        || agent === 'cypher'
        || agent === 'jett'
        || agent === 'killjoy'
        || agent === 'omen'
        || agent === 'phoenix'
        || agent === 'raze'
        || agent === 'reyna'
        || agent === 'sage'
        || agent === 'sova'
        || agent === 'skye'
        || agent === 'viper'
        || agent === 'yoru') {
        let data = await valorant.getAgent(agent)

        const embed = new MessageEmbed()
            .setTitle(`${data.name} Agent Info`)
            .setThumbnail(data.photos.icon)
            .setDescription(`
            **Type:** ${data.tags}\n
            **Story:** ${data.biography.story}\n
            **About:** ${data.biography.agent_about}\n
            **Origin:** ${data.biography.region}\n
            `)
            .addField('Abilities', `\`Q\`: ${data.stats.Q}\n\`E\`: ${data.stats.E}\n\`C\`: ${data.stats.C} - **Signature**\n\`X\`: ${data.stats.X} - **Ultimate**`)

            message.channel.send({ embeds: [embed] });
    } else {
        return message.channel.send('Please enter a valid agent.')
    }
  },
};
