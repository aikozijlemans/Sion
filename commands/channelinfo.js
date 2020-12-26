const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let nsfwV = message.channel.nsfw ? 'Yes' : 'No';
    let parentV = message.channel.parent ? message.channel.parent : 'No parent category';
    let topicV = message.channel.topic ? message.channel.topic : 'There is no topic for this channel.';
    let embed = new Discord.RichEmbed()
        .setTitle('Channel: ' + message.channel.name)
        .setDescription('Topic: ' + topicV)
        .addField('NSFW?', nsfwV, true)
        .addField("Category: ", parentV, true)
        .addField('Position: ', message.channel.position, true)
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["channelinfo", "Channelinfo", "Channel", "channel"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'channelinfo',
    category: "Info",
    description: "channelinfo",
    usage: 'channelinfo,Channelinfo,Channel,channel'
  };