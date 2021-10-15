

module.exports = async (client) => {
    const stringlength = 69;
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`);
    console.log(`     ┃ Logged to the client ${client.user.username}` + " ".repeat(-1 + stringlength - ` ┃ `.length - `Logged to the client ${client.user.username}`.length) + "┃");
    console.log(`     ┃ -> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users` + " ".repeat(-1 + stringlength - ` ┃ `.length - `-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`.length) + "┃")
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);

    function change_status(client) {
        try {
          client.user.setActivity('Sugiura Ayano ❤️', { type: "PLAYING" }) // Can Be WATCHING, STREAMING, LISTENING
          setInterval(() => {
              const statuses = [
                  `Sugiura Ayano ❤️ ${client.config.app.px}help`,
                  `LYGC+ ❤️ ${client.config.app.px}help`,
                  `Kyoko x Ayano ❤️ ${client.config.app.px}help`,
                  `Invite : ayano.rei.my.id`
              ]
      
              const status = statuses[Math.floor(Math.random() * statuses.length)]
              client.user.setActivity(status, { type: "PLAYING"}) // Can Be WATCHING, STREAMING, LISTENING
          }, 10000) // Second You Want to Change Status, This Cahnges Every 2 Seconds
        } catch (e) {
          console.log(String(e.stack).bgRed)
        }
      }
      try{
        change_status(client)
      }catch (e) {
        console.log(String(e.stack).red);
      }
      //Change status each 10 minutes
      setInterval(()=>{
        try{
          change_status(client)
        }catch (e) {
          console.log(String(e.stack).red);
        }
      }, 10*60*1000)
};