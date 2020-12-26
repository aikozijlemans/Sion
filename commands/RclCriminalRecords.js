const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to the RCL Criminal Records server: https://discord.gg/ngGJ8eY");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rclcriminalrecords", "rcr","RCR","rclcrimrecords","paultovia"],
  permLevel: "User"
};

exports.help = {
  name: 'rclcriminalrecords',
  category: "Partners",
  description: 'Invites you to the RCL Criminal Records server.',
  usage: 'rclcriminalrecords, rcr, RCR, rclcrimrecords, paultovia'
};