const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, We have multiple ways of offering support please select one of the following:\nEmail: support@siondevelopment.xyz\nDiscord support server: https://discord.gg/f4J7SUT\nWebsite: http://siondevelopment.xyz/");
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
