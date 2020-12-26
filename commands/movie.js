const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('movies')
    .setImage('https://cdn.discordapp.com/avatars/381857611106222101/0a1184f6aa80944aabd9a8b5f40970ce.webp?size=128')
    .setDescription(`1. Monument Men **€16.99**\n2. Alita **€16.99**\n3. Velvet assassin **not available**\n4. Ichi the killer **not available**\n5. your name **€8.99**\n6. Guess who\'s back **not available**\n7. The hunt for red october **€9.99**\n8. Serbian film **not available**\n9. Steven universe the movie **not available**\n10. Spirited away **not available**\n11. A Whisker\'s Away **not available**\n12. Weathering With You **€12.99**\n13. Shinmai-Maou-no-Testament **not available**\n14. STALKER **€10.99**\n15. Chicken run **not available**.`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Movie"],
  permLevel: "CEO"
};

exports.help = {
  name: 'movie',
  category: "[X] Sion Staff",
  description: 'movie reminder',
  usage: '~movie'
};