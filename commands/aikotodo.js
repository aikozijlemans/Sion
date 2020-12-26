const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Aiko\'s ToDo list!')
    .setDescription(`
    **To belt:** <@333225772414140417>, <@332142889150840833>, <@534245746266865664>, <@275632211158499328> for adding to many emotes to <#785501848084676608>\n
    **To hug:** <@275632211158499328>, <@534245746266865664>, <@530030932124499979>, <@714480763030208554>, <@333225772414140417> because they cute af!.`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk');
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["at"],
  permLevel: "CEO"
};

exports.help = {
  name: 'aikotodo',
  category: "[X] Sion Staff",
  description: 'my todo list!',
  usage: '~at'
};