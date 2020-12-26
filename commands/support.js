const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to the support server: https://discord.gg/6EtugHk");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Support"],
  permLevel: "User"
};

exports.help = {
  name: 'support',
  category: "Support",
  description: 'Invites you to the support server',
  usage: '~Support'
};