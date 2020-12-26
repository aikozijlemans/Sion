const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to Scrizeebe's News server: https://discord.gg/vGbeP9j");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["SN", "sn","scrizeebenews"],
  permLevel: "User"
};

exports.help = {
  name: 'ScrizeebeNews',
  category: "Partners",
  description: 'Invites you to Scrizeebe\'s News server',
  usage: '~ScrizeebeNews, ~scrizeebenews, ~SN, ~sn'
};