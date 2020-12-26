const Discord = require("discord.js");
const errors = require("../util/errors.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES")
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args[1]) || null;
  if (!role) return message.reply("Specify a role!");
  if (rMember.roles.has(role.id)) return message.reply("They already have that role.");
  await (rMember.addRole(role.id));

  try {
    await rMember.send(`Congrats, you have been given the role ${role.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${role.name}. We tried to DM them, but their DMs are locked.`)
  }
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["addrole", "Addrole"],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: 'addrole',
    category: "Admin Commands",
    description: "~addrole <role name>",
    usage: 'addrole,Addrole'
  }