const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(`settings lockeddown?`,`yes!`)
    .setDescription(`Made by Defensionem#0001 | This bot is hosted by https://discordbothosting.com`);
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Locksettings"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'locksettings',
  category: "bot owner",
  description: 'locks down settings and automatically changes them back to what they were when this command was activated',
  usage: 'locksettings, Locksettings'
};
