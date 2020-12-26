const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let personHug = message.mentions.members.first();
    let hug = ['https://i.imgur.com/9cAHJc7.gif', 'https://i.imgur.com/ezgxunk.gif', 'https://i.imgur.com/8uKni1k.gif','https://i.imgur.com/tHaw9uM.gif','https://i.imgur.com/TGWBkPe.gif','https://i.imgur.com/HpB1Mpn.gif','https://i.imgur.com/BVzWdzX.gif','https://i.imgur.com/9MWuhVq.gif','https://i.imgur.com/b0Zirvk.gif','https://i.imgur.com/NMVAbT7.gif','https://i.imgur.com/MSBmKUT.gif','https://i.imgur.com/hSBCAF3.gif','https://i.imgur.com/ZQ04J1R.gif','https://i.imgur.com/HertC2k.gif','https://i.imgur.com/01qlwCW.gif','https://i.imgur.com/wHUDZKr.gif','https://i.imgur.com/UsJSrCS.gif','https://i.imgur.com/wxlzdKe.gif','https://i.imgur.com/O5cDNxy.gif','https://i.imgur.com/WVU74MY.gif','https://i.imgur.com/jqjgjBQ.gif'];
    let HugR = hug[Math.floor(Math.random() * hug.length)];
    let quote;
    let quoteR;
    if (!personHug) {
        let personHug = "nobody";

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> blushes because of ${personHug}!**`)
            .setImage(HugR)
            .setColor(client.config.embedColor);

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> blushes because of ${personHug}!**`)
        .setImage(HugR)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["blush", "Blush"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'blush',
    category: "RolePlay",
    description: "Blush because of someone!",
    usage: 'blush,Blush'
  };