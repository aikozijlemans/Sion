const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://tenor.com/yi4L.gif', 'https://tenor.com/JG4c.gif', 'https://tenor.com/8457.gif','https://tenor.com/bboyt.gif','https://tenor.com/3DyI.gif','https://tenor.com/Frmj.gif','https://tenor.com/32ED.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> cuddle's ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> cuddle's ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["cuddle", "Cuddle"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'cuddle',
    category: "RolePlay",
    description: "Cuddle someone!",
    usage: '~cuddle @user, ~Cuddle @user'
  };