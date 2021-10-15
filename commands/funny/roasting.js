const axios = require("axios");

module.exports = {
    name: 'roasting',
    category: 'funny',
    aliases: ['insult','roast'],
    utilisation: '{prefix}roasting',
    description: 'Let bot roasting in server',

    async execute(client, message, args){
        const mentionedMember = message.mentions.members.first();
        if (!mentionedMember) return message.channel.send('Please mention a valid user to roast!');
        axios.get(`https://evilinsult.com/generate_insult.php?lang=en&amp;type=json`)
            .then(function (response) {
                message.channel.send(`${mentionedMember.user}, ${response.data}`)
            })
            .catch(function (error) {
                console.log(error);
                message.channel.send('Something went wrong, please try again later.')
            })
    },
};