const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
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
    aliases: ["Ass", "ass","ASS","booty","Booty"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'ass',
    category: "NSFW",
    description: 'shows you that booty',
    usage: 'ass, Ass, ASS,booty,Booty'
  };