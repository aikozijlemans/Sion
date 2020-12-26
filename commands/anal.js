const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
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
    aliases: ["anal", "ANAL", "Anal"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'anal',
    category: "NSFW",
    description: 'shows you a anal picture',
    usage: 'anal, ANAL, Anal'
  };