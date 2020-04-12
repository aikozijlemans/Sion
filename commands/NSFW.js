const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.author.send("Hello, this is the link to the NSFW server's: https://discord.gg/HZGY4wY");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["NSFW-INVITE", "nsfw-invite", "nsfwinvite"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: 'NSFW',
  category: "NSFW",
  description: 'Invites you to the NSFW Server',
  usage: 'NSFW-INVITE, nsfw-invite'
};
