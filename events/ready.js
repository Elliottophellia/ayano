

module.exports = async (client) => {
    const stringlength = 69;
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`);
    console.log(`     ┃ Logged to the client ${client.user.username}` + " ".repeat(-1 + stringlength - ` ┃ `.length - `Logged to the client ${client.user.username}`.length) + "┃");
    console.log(`     ┃ -> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users` + " ".repeat(-1 + stringlength - ` ┃ `.length - `-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`.length) + "┃")
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);

    client.user.setActivity(client.config.app.playing);
};
