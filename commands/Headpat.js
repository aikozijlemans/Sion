const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personPat = message.mentions.members.first();
    let Pat = ['https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif' ,'https://media2.giphy.com/media/Z7x24IHBcmV7W/giphy.gif' ,'https://media0.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif' ,'https://media2.giphy.com/media/L2z7dnOduqEow/giphy.gif' ,'https://media1.giphy.com/media/4HP0ddZnNVvKU/giphy.gif' ,'https://media0.giphy.com/media/ye7OTQgwmVuVy/giphy.gif'];
    let PatR = Pat[Math.floor(Math.random() * Pat.length)];
    let quote;
    let quoteR;
    if (!personPat) {
        let personPat = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> pats ${personPat}!**`)
            .setImage(PatR)
            .setColor('#0099ff');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> pats ${personPat}!**`)
        .setImage(PatR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pat", "Pat"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'pat',
    category: "RolePlay",
    description: "Get or give headpats!",
    usage: 'pat,Pat'
  };