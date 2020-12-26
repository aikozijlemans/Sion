const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://i.imgur.com/k5tADh7.gif', 'https://i.imgur.com/qoNklME.gif', 'https://i.imgur.com/dSOXQ4w.gif','https://i.imgur.com/VPhAwVK.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> bites ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> bites ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["bite", "Bite"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Bite',
    category: "RolePlay",
    description: "Bite someone!",
    usage: 'bite,Bite'
  };