const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
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
    aliases: ["gif"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'gif',
    category: "NSFW",
    description: 'gives you a moving naughty image',
    usage: 'gif'
  };
