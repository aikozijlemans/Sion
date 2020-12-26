const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to Krystal's server and Twitter: https://discord.gg/94tZFnF | https://twitter.com/krystalwolfy?s=09");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Krystalwolfy", "krystalwolfy","Liza","liza","Krystal","krystal"],
  permLevel: "User"
};

exports.help = {
  name: 'krystalwolfy',
  category: "Partners",
  description: 'Invites you to Krystal\'s discord and gives you her twitter.',
  usage: 'Krystalwolfy, krystalwolfy, Liza, liza, Krystal, krystal'
};