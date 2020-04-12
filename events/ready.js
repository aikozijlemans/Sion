module.exports = async client => {
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
  client.user.setActivity(`${client.settings.get("default").prefix}help`, {type: "PLAYING"});
};
