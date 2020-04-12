const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setImage('https://i.imgur.com/VdwOnkM.jpg')
    .setDescription(`Created by Jeremy Zijlemans otherwise known as <@381857611106222101>`);
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Creator","creator"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'Creator',
  category: "bot owner",
  description: 'Shows you the bots Creator',
  usage: 'Creator, creator'
};
