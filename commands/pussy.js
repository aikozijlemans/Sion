const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
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
    aliases: ["Pussy", "pussy"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'pussy',
    category: "NSFW",
    description: 'Shows you that pussy in its full glory!',
    usage: 'pussy, Pussy'
  };
