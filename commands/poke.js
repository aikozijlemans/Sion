const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personPoke = message.mentions.members.first();
    let pokes = ['https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif', 'https://media1.tenor.com/images/efce56eba8ffb9e07a7afc0751ad58ed/tenor.gif', 'https://media1.tenor.com/images/573002c649f529f0141f07c740df54ea/tenor.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
            .setImage(pokesR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
        .setImage(pokesR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["poke", "Poke"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'poke',
    category: "RolePlay",
    description: "Get poked!",
    usage: 'poke,Poke'
  };