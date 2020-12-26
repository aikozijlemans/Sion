const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personPat = message.mentions.members.first();
    let Pat = ['https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif','https://media.giphy.com/media/zKls8LkYpjbbO/giphy.gif','https://media.giphy.com/media/uqSU9IEYEKAbS/giphy.gif','https://media.giphy.com/media/13qiaO17pTzxkI/giphy.gif','https://media.giphy.com/media/qNtqBSTTwXyuI/giphy.gif'];
    let PatR = Pat[Math.floor(Math.random() * Pat.length)];
    let quote;
    let quoteR;
    if (!personPat) {
        let personPat = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> slaps ${personPat}!**`)
            .setImage(PatR)
            .setColor('#0099ff');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> slaps ${personPat}!**`)
        .setImage(PatR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["slap", "Slap"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Slap',
    category: "RolePlay",
    description: "slap a user!",
    usage: 'slap,Slap'
  };