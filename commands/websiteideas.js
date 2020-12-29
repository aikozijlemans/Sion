const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle('Website Ideas')
        .setDescription(`1. Staff page with page for each founder (Aiko, Orso, Bread).\n2. Login feature for donators,\n3. Blog with login feature for sion staff.`)
        .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')

    return message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["idea","websiteideas","Idea","Ideas"],
    permLevel: "Manager"
};

exports.help = {
    name: 'ideas',
    category: "[X] Sion Staff",
    description: 'Website Ideas',
    usage: '~ideas'
};
