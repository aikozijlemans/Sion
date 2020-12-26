const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle(`Click here to invite the bot`)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=681433074944442384&scope=bot&permissions=2146958847')
    .setDescription('This bot is still in beta you can request or suggest commands by DMing <@381857611106222101>.')
	.setTimestamp()
	.setFooter('If you have a suggestion for the bot please DM zq_Defen#0001.', 'https://i.imgur.com/x1OHXYf.png');
  return message.author.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Invite", "INV", "inv"],
  permLevel: "User"
};

exports.help = {
  name: 'invite',
  category: "Support",
  description: 'Gives you the bot invite link.',
  usage: '~invite'
};