module.exports = async client => {
  client.logger.log(`${client.user.tag}, ready to serve ${client.guilds.size} servers.`, "ready");
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Bot Owner's: AikoUwU#0001 (629724267990220823), Keepo ♋#0947 (118178908834234374), Catgirl Kira#9700(530030932124499979)`);
  console.log(`Bot Manager's: ReaperMazikeen#2441 (535215402016571412)`);
  console.log(`Bot Web Dev's:  Aiko#0001 (147307892133986304)`);
  console.log(`Bot Advisor's: Kat The Sass Master#7427 (635548069064212510), Vu#0411 (360973034250698753), Ðє₴¢єη†#7826 (629512123264794626), peach#1010 (633373085336338433), ScriptIntelligence#4796 (170639211182030850)`);
  console.log(`Bot Developer's:  Luatic#6803 (680364685815709747), aminorfugue#2750 (252166051389767681), mapri_50ᴰᵉᵛ 130°#0666 (252166051389767681)`);
  console.log(`Bot Server's: ${client.guilds.size}`);
  console.log(`Host: discordbothosting.com`);
  client.user.setActivity(`${client.settings.get("default").prefix}help`, {type: "PLAYING"})
 client.user.setActivity(`Use ${client.settings.get("default").prefix}help to see all commands, Working for ${client.guilds.size} servers. - Made by Aiko#0003.`);


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`${client.settings.get("default").prefix}help, Working for ${client.guilds.size} servers. - Made by Aiko#0003.`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`${client.settings.get("default").prefix}help, Working for ${client.guilds.size} servers. - Made by Aiko#0003.`);
});
};