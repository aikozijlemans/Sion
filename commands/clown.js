const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('The clown of the year')
    .setImage('https://image.flaticon.com/icons/png/512/61/61045.png')
    .setDescription(`The biggest clown award this month goes to **Facebook**\n\n**For trying to steal all my user data.**`)
    .setFooter('If you have a suggestion for the bot please DM Aiko#0003.')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Clown"],
  permLevel: "User"
};

exports.help = {
  name: 'clown',
  category: "Fun",
  description: 'The clown of the month.',
  usage: '~clown, ~Clown'
};