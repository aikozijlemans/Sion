const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.channel.send("Hello, this is the link to Petri's Dungeon server: https://discord.gg/JM6APw2");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Petri", "petri","PetrisDungeon","petrisdungeon"],
  permLevel: "User"
};

exports.help = {
  name: 'PetrisDungeon',
  category: "Partners",
  description: 'Invites you to Petri\'s Dungeon server',
  usage: '~Petri, ~petri, ~PetrisDungeon, ~petrisdungeon'
};