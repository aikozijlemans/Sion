const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to the support server: https://discord.gg/ESQSmzH");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["server", "guide", "Server", "Guide", "support", "Support"],
  permLevel: "User"
};

exports.help = {
  name: 'support',
  category: "Miscelaneous",
  description: 'Invites you to the support server',
  usage: 'server, guide, Server, Guide, support, Support'
};
