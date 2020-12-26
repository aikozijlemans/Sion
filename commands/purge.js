exports.run = (client, message, args) => {
    const messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: 'purge',
    category: "Admin Commands",
    description: 'Purges X amount of messages from a given channel.',
    usage: '~purge <number>'
  };