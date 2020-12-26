exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  message.reply(`Your permission level is: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mylvl","ml"],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Fun",
  description: "Tells you your permission level for the current message location.",
  usage: "mylevel"
};