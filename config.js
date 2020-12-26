const config = {
  "ceo": ["629724267990220823","118178908834234374"],
  "cfo": ["313405612589580288","147307892133986304"],
  "manager": ["535215402016571412","571095664050569227","530030932124499979","685127470625980501"],
  "web": ["-"],
  "advisor": ["633373085336338433","629512123264794626","","170639211182030850","360973034250698753","235823247634071562","635548069064212510","714480763030208554"],
  "developer": ["663447617715568650","680364685815709747"],
  "lewd": ["252965894865682435","283697018386513921","493543835834777601"],
  "support": ["450344748704727042","167479003760820224"],
  "tester": ["361980856501403660","209279906280898562"],
  "moderator": ["-"],
  "contributor": ["279090581848850433"],
  "partner": ["164913079727947777","170639211182030850","317791690788306946","138239853673316353","337126363981152259"],
  "donator": ["149525317298552832"],
  "token": process.env.DISCORD_TOKEN,

  "defaultSettings" : {
    "prefix": "$",
    "modLogChannel": "sion-logs",
    "modRole": "Moderator",
    "adminRole": "Administrator",
    "systemNotice": "true",
    "welcomeChannel": "welcome",
    "welcomeMessage": "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D",
    "welcomeEnabled": "true"
  },


  permLevels: [
    { level: 0,
      name: "User",
      check: () => true
    },
    { level: 1,
      name: "Donator",
      check: (message) => config.donator.includes(message.author.id)
    },
    { level: 2,
      name: "Partner",
      check: (message) => config.partner.includes(message.author.id)
    },
    { level: 3,
      name: "Contributor",
      check: (message) => config.contributor.includes(message.author.id)
    },
    { level: 4,
      name: "Moderator",

      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 5,
      name: "Administrator",
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 6,
      name: "Server Owner",
      check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
    },
    { level: 7,
      name: "Bot Moderator",
      check: (message) => config.moderator.includes(message.author.id)
    },
    { level: 8,
      name: "Sion 2.0 Tester",
      check: (message) => config.tester.includes(message.author.id)
    },
    { level: 9,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 10,
      name: "Developer",
      check: (message) => config.developer.includes(message.author.id)
    },
    { level: 11,
      name: "Advisor",
      check: (message) => config.advisor.includes(message.author.id)
    },
    { level: 12,
      name: "Web Developer",
      check: (message) => config.web.includes(message.author.id)
    },
    { level: 13,
      name: "Manager",
      check: (message) => config.manager.includes(message.author.id)
    },
    { level: 14,
      name: "CFO",
      check: (message) => config.cfo.includes(message.author.id)
    },
    { level: 15,
      name: "CEO",
      check: (message) => config.ceo.includes(message.author.id)
    }
  ]
};

module.exports = config;