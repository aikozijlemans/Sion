const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Birth days')
    .setImage('https://cdn.discordapp.com/avatars/381857611106222101/0a1184f6aa80944aabd9a8b5f40970ce.webp?size=128')
    .setDescription(`1. Aiko **8 December**.\n2. Liza **24 December**.\n3. Kira **12 September**.\n4. Bean **2 June**.\n5. Lilly **5 February**.\nDo you want your birthday here DM **Aiko#0003**!`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Bday","bday","Birtday"],
  permLevel: "CEO"
};

exports.help = {
  name: 'birthday',
  category: "[X] Sion Staff",
  description: 'bday reminder',
  usage: '~bdays'
};