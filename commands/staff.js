const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('Sion Staff')
    .setDescription(`
    **CEO:** Aiko#0003, Keepo.\n
    **CFO:** Catgirl Kira#9700.\n
    **Manager:** ReaperMazikeen#2441\n
    **Advisor:** Kat The Sass Master#7427, Marian =^_^=#5904, peach#1010, ScriptIntelligence#4796, Vu#0411, Ðє₴¢єη†#7826.\n
    **Developer:** aminorfugue#2750, Luatic#6803, mapri_50ᴰᵉᵛ 130°#0666.\n
    **Sion 2.0 Tester:** Megalodon (belongs to Asu)#0206, Cram#6143.\n
    **Bot Support:** Anaton#1111.\n
    **Bot Moderator:** No one yet, This position is for people who are staff of the Sion Hub!`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk');
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["SionStaff","sionstaff","Sionstaff","staff"],
  permLevel: "User"
};

exports.help = {
  name: 'Staff',
  category: "Support",
  description: 'The sion staff team!',
  usage: '~staff'
};