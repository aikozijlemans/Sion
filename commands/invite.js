const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(`Click here to invite the bot`)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=681433074944442384&scope=bot&permissions=2146958847')
    .setTimestamp()
    .setDescription(`This command is still work in progress so it might fail sometimes!`);
  return message.author.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Invite", "INV", "inv"],
  permLevel: "Bot Support"
};

exports.help = {
  name: 'invite',
  category: "Miscelaneous",
  description: 'Gives you the bot invite link.',
  usage: 'invite, Invite, INV, inv'
};
