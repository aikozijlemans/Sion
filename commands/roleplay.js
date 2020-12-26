const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Commands that need to be fixed!')
    .setDescription(`Roleplay:\n
    Cuddle\n
    Runat\n
    Runfrom\n\n
    Info:\n
    Help!`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["RolePlay"],
  permLevel: "Advisor"
};

exports.help = {
  name: 'roleplay',
  category: "[X] Sion Staff",
  description: 'Aiko\'s todo list.',
  usage: '~roleplay'
};