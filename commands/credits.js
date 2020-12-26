const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Credits')
    .setImage('https://cdn.discordapp.com/avatars/381857611106222101/0a1184f6aa80944aabd9a8b5f40970ce.webp?size=128')
    .setDescription(`This bot was made by <@629724267990220823> and is hosted by https://discordbothosting.com/`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Credits"],
  permLevel: "User"
};

exports.help = {
  name: 'credits',
  category: "Support",
  description: 'Shows you the bot creator/author and hosting service.',
  usage: '~Credits'
};