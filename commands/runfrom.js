const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://tenor.com/bb1bT.gif', 'https://tenor.com/bm8Te.gif', 'https://tenor.com/FOKG.gif','https://tenor.com/bhiP7.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> runs from ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> runs from ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["runfrom", "Runfrom"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'runfrom',
    category: "RolePlay",
    description: "Run from someone!",
    usage: 'runfrom,Runfrom'
  };