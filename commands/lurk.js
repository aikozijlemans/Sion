const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://tenor.com/QWjV.gif','https://tenor.com/zyHt.gif','https://tenor.com/bkF69.gif','https://tenor.com/bii2Z.gif','https://tenor.com/3LlG.gif','https://tenor.com/bi2ea.gif','https://tenor.com/bi4lk.gif','https://tenor.com/bjG9X.gif','https://tenor.com/9tUV.gif','https://tenor.com/9jND.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> lurks at ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> lurks at ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["lurk", "Lurk"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'lurk',
    category: "RolePlay",
    description: "Lurk at someone!",
    usage: 'lurk,Lurk'
  };