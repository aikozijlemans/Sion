const Discord = require('discord.js');
exports.run = (client, message, args) => {
	var m = args.join(' ');
	if (!m) return message.reply('Need content for the embed...');
	const embed = new Discord.RichEmbed()
		.setDescription(m)
		.setColor([255, 0, 0]);
	message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: "Moderator"
};

exports.help = {
	name: 'embed',
	category: 'Admin Commands',
	description: 'Embeds something',
	usage: '~embed [description]'
};