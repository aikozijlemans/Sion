const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
    var { body } = await superagent
    .get('https://aws.random.cat/meow')
    console.log(body.file)
    if(!body) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setAuthor('Kitty Cat', message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()

        message.channel.send(mEmbed)
        msg.delete();
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["cat", "kitty","Kitty"],
    permLevel: "User"
  };
  
  exports.help = {
    name: 'Cat',
    category: "fun",
    description: "Who doesn't love cats.",
    usage: 'Cat,cat,Kitty,kitty'
  };
