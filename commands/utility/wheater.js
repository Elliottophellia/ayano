const weather = require('weather-js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "wheater",
  category: "utility",
  aliases: ["cuaca"],
  utilisation: "{prefix}wheater",
  description: "Show statistic weather for country or city search",

  async execute(client, message, args) {
    let degree;
    if(args[0]){
      if(args[0] === "C" || args[0] === "c" || args[0] === "F" || args[0] === "f"){
          degree = args[0].toUpperCase();
      } else{
          return message.channel.send("Enter a valid degree type (C | F).");
      }
    } else{
      return message.channel.send(`Wrong Format! try: \`${client.config.app.px}weather <C/F> <Location>\``);
    }

    if(!args[1]) return message.channel.send("Enter a location to search for.");

    weather.find({search: args[1], degreeType: degree}, function(err, result) {
      try{

        let embed = new MessageEmbed()
          .setColor(client.config.app.color)
          .setTitle(`Weather`)
          .setThumbnail(result[0].current.imageUrl)
          .setDescription(`Showing weather data for ${result[0].location.name}`)
          .addField("**Temp:**", `${result[0].current.temperature}°${result[0].location.degreetype}`, true)
          .addField("**Weather:**", `${result[0].current.skytext}`, true)
          .addField("**Day:**", `${result[0].current.shortday}`, true)
          .addField("**Feels like:**", `${result[0].current.feelslike}°${result[0].location.degreetype}`, true)
          .addField("**Humidity:**", `${result[0].current.humidity}%`, true)
          .addField("**Wind:**", `${result[0].current.winddisplay}`, true)

        message.channel.send({ embeds: [embed] }); 
      } catch(err){
        console.log(err);

        return message.channel.send(":x: **This Country Or City Not Found**");
      }
    });
  },
};
