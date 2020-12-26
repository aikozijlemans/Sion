const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personKiss = message.mentions.members.first();
    let kiss = ['https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif', 'https://media1.tenor.com/images/626cb1e13142bce7f228ab8e30e2519c/tenor.gif', 'https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif' ,'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif' ,'https://media1.tenor.com/images/a58780c622888db8041b16bf19deff73/tenor.gif'];
    let KissR = kiss[Math.floor(Math.random() * kiss.length)];
    let quote;
    let quoteR;
    if (!personKiss) {
        let personKiss = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> Kisses ${personKiss}!**`)
            .setImage(KissR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> Kisses ${personKiss}!**`)
        .setImage(KissR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["Kiss", "kiss"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Kiss',
    category: "RolePlay",
    description: "Get Kissed!",
    usage: 'Kiss,kiss'
  };