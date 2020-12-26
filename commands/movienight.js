const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('movies')
    .setDescription(`Friday 27 November at 8PM CET - Monument Men\n Friday 4 December at 8PM CET - Alita\n Friday 11 December at 8PM CET - your name\n Friday 18 December at 8PM CET - The hunt for red october\n Friday 25 at 8PM CET - Weathering With You\n Friday 1 January - new years day aka nothing\n Friday 8 January at 8PM CET - STALKER\n [Do you wish to join the movie nights then click here!](https://discord.gg/T9dhQPm)`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["MovieNight"],
  permLevel: "User"
};

exports.help = {
  name: 'movienight',
  category: "Events",
  description: 'Movie nights hosted by Aiko#0003',
  usage: '~movienight'
};