const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://i.imgur.com/DrNAjWk.gif', 'https://i.imgur.com/CxGZNAL.gif', 'https://i.imgur.com/Pv6QJnJ.gif','https://i.imgur.com/Udaklgp.gif','https://i.imgur.com/QDpVqHe.gif','https://i.imgur.com/uALJJV2.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> licks ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> licks ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["lick", "Lick"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'lick',
    category: "RolePlay",
    description: "Lick someone!",
    usage: 'lick,Lick'
  };