const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setImage('https://i.imgur.com/QekwcJE.png')
    .setDescription(`The picture below is automatically generated | This bot is hosted by https://discordbothosting.com`);
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Serverinfo", "sinfo", "Sinfo"],
  permLevel: "User"
};

exports.help = {
  name: 'serverinfo',
  category: "Miscelaneous",
  description: 'Shows you the bots server info',
  usage: 'sinfo, Serverinfo, Sinfo, serverinfo'
};
