const { MessageEmbed } = require("discord.js");
const { Calculator } = require("weky");

module.exports = {
  name: "calculator",
  category: "utility",
  aliases: ["kalkulator"],
  utilisation: "{prefix}calculator",
  description: "calculator in discord",

  async execute(client, message, args) {
    await Calculator({
        message: message,
        embed: {
            title: 'Calculator',
            color: client.config.app.color,
            footer: 'Calculator on Discord',
            timestamp: true
        },
        disabledQuery: 'Calculator is disabled!',
        invalidQuery: 'The provided equation is invalid!',
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });
  },
};
