const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = [
        'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
        'https://media.giphy.com/media/cotftb3AXgfV6/giphy.gif',
        'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
        'https://media.giphy.com/media/143v0Z4767T15e/giphy.gif',
        'https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif',
        'https://media.giphy.com/media/yziFo5qYAOgY8/giphy.gif',
        'https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif',
        'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
        'https://media.giphy.com/media/JUwliZWcyDmTQZ7m9L/giphy.gif',
        'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
        'https://media.giphy.com/media/118TCy0aWhHLOM/giphy.gif',
        'https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif',
        'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
        'https://media.giphy.com/media/GcJN2Dz5XMDeM/giphy.gif',
        'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
        'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
        'https://media.giphy.com/media/H5rRRuuANG98I/giphy.gif',
        'https://media.giphy.com/media/VXP04aclCaUfe/giphy.gif',
        'https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif',
        'https://media.giphy.com/media/oTiuuAuYb22KQ/giphy.gif',
        'https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif',
        'https://media.giphy.com/media/GLBllVbDSj0MU/giphy.gif',
        'https://media.giphy.com/media/JGNmo9nBmmy8U/giphy.gif',
        'https://media.giphy.com/media/f6y4qvdxwEDx6/giphy.gif',
        ];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> hugs ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> hugs ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hug", "Hug"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'hug',
    category: "RolePlay",
    description: "Get hugged!",
    usage: 'hug,Hug'
  };