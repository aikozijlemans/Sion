const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://tenor.com/oY0h.gif','https://tenor.com/varM.gif','https://tenor.com/borZF.gif','https://tenor.com/QpKC.gif','https://tenor.com/6G3r.gif','https://tenor.com/bgcjw.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> hides from ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> hides from ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hide", "Hide"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'hide',
    category: "RolePlay",
    description: "Hide from someone!",
    usage: 'hide,Hide'
  };