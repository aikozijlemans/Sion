const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('todo list')
    .setDescription(`**Priority indictators**\nHighest priority: 🔴\nMedium Priority: 🟠\nLow priority: 🟢\n\n**Krystal\'s Maid Cafe**\n🔴 Mee6 activity roles.\n🟠 Come up with some things to make the community more fun.\n\n**Cutie Plaza**\n🔴 Purge the inactives.\n🟠 Come up with some server events.\n🟠 Reform role structure.\n\n**Aiko\'s Lewd Cafe**\n🟢 Reform the discord.\n🟢 Add new roles.\n🟢 Create a bot with discord games and a ecenomy system.\n\n**Sion Hub**\n🟢 Reform the discord a bit.\n\n\n**Sion**\n1. Continue the website build. - **In progress!**\n2. update the bots.\n3. make the managers and advisors come up with new commands.\n4. fire koala. - **Complete!**\n5. ask the managers and advisors for suggestions about the website.\n6. create a new bot for more hype.\n7. find a website which is selling ads to advertise the bot more. **Complete!**\n8. promote a manager to CFO and a advisor to manager. - **Looking for a capable Advisor to take the spot!**\n9.look into making more discord logs for sion bots.\n10. fix all roleplay commands and add more gifs.`)
    .setFooter('If you have a suggestion for the bot please join https://discord.gg/6EtugHk')
    
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ToDo"],
  permLevel: "Manager"
};

exports.help = {
  name: 'todo',
  category: "[X] Sion Staff",
  description: 'Aiko\'s todo list.',
  usage: '~todo'
};