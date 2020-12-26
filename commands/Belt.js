const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personBelt = message.mentions.members.first();
    let belt = ['https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif' ,'https://media1.tenor.com/images/599b33016df446858084136b12fba5c4/tenor.gif' ,'https://media1.tenor.com/images/de60482c88d56f197b9b75bf844825b5/tenor.gif'];
    let BeltR = belt[Math.floor(Math.random() * belt.length)];
    let quote;
    let quoteR;
    if (!personBelt) {
        let personBelt = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> belts the booty of ${personBelt}!**`)
            .setImage(BeltR)
            .setColor('#0099ff');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> Belts the booty of ${personBelt}!**`)
        .setImage(BeltR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["belt"],
  permLevel: "Partner"
};

exports.help = {
  name: 'Belt',
  category: "RolePlay",
  description: '~Belt <mention user>',
  usage: 'belt'
};