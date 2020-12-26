const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://i.imgur.com/m8ZtlNO.gif', 'https://i.imgur.com/umCms9c.gif', 'https://i.imgur.com/3uMLnPC.gif','https://i.imgur.com/8Emt3HH.gif','https://i.imgur.com/kVSTKPb.gif','https://i.imgur.com/duiXoPW.gif','https://i.imgur.com/RG7xw6a.gif','https://i.imgur.com/NWEGNSx.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> kills ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> kills ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kill", "Kill"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Kill',
    category: "RolePlay",
    description: "Kill someone!",
    usage: 'kill,Kill'
  };