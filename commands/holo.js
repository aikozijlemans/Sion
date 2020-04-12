const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'holo'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["holo", "Holo"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Holo',
    category: "NSFW",
    description: 'Gives you a holo image.',
    usage: 'Holo, holo'
  };
