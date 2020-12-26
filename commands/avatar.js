const Discord = require('discord.js');

exports.run = (client, message, args) => {
	try {
		var targetName = args.join(' ');

		if (targetName.includes('@'))
			target = message.mentions.users.first();
		else if (args.length > 0 && !targetName.includes('@')) {
			try {
				var target = message.guild.members.find(member => [member.displayName.toLowerCase(), member.user.username.toLowerCase()].includes(targetName.toLowerCase())).user;
			}
			catch (err) {
				targetName = targetName.substring(0, targetName.indexOf('#'));
				var target = message.guild.members.find(member => [member.displayName.toLowerCase(), member.user.username.toLowerCase()].includes(targetName.toLowerCase())).user;
			}
		}
		else if (args.length == 0)
			var target = message.author;

		let embed = new Discord.RichEmbed()
			.setTitle(`**${target.username}'s** Avatar`)
			.setImage(target.displayAvatarURL)
			.setColor(client.config.embedColor);
		return message.channel.send(embed);

	} catch (err) {
		if (target == null) {
			message.react('💤');
			message.channel.send(`❌ user \`${targetName}\` not found ❌`).then(respMessage => {
				if (message.guild.me.hasPermission("MANAGE_MESSAGES"))
					respMessage.delete(10000);
			});
		}
		else
			console.log(err);
	}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pfp", "Pfp", "Profile", "profile"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'pfp',
    category: "Fun",
    description: "Gets your profile picture.",
    usage: 'pfp,Pfp,Profile,profile'
  };