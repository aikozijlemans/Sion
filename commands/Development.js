const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Sion Development Team!')
    .setDescription(`Founder: Aiko\nWeb Developer: Orsokuma\nServer Host & Developer: slicedbread`)
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Developer","dev","Dev"],
  permLevel: "User"
};

exports.help = {
  name: 'developer',
  category: "Support",
  description: 'Give our developers some love please!',
  usage: '~developer, ~Developer, ~dev, ~Dev'
};