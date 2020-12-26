const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
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
    aliases: ["Hentai","hentai"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Hentai',
    category: "NSFW",
    description: 'Gives you weird drawn stuff',
    usage: 'hentai, Hentai'
  };