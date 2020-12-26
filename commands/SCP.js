const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
    var { body } = await superagent
    .get('https://meme-api.herokuapp.com/gimme/dankmemesfromsite19')
    console.log(body.url)
    if(!body) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setAuthor('SCP', message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()

        message.channel.send(mEmbed)
        msg.delete();
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["SCP", "scp"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'SCP',
    category: "Fun",
    description: "Special containment protocol",
    usage: 'SCP,scp'
  };