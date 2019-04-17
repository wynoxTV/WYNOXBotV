const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W.";
const PACKAGE = require('./package.json');

client.on('ready', () => {
  console.log('Logged in as ' +client.user.tag);
  client.user.setActivity('La chaîne de WYNOX',{type:'STREAMING'})
});

client.on('message', msg => {
  if (msg.content === 'Oui et toi') {
    msg.reply('Très bien merci et passe une bonne journée :)');
  }
});

client.on('guildMemberAdd', member =>{
  let embed = new Discord.RichEmbed()
      .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
      .setAuthor(+ member.user.avatarURL + " " + member.user.username)
     member.guild.channels.get('565546759364018208').send(embed)
   
});

client.on('guildMemberRemove', member =>{
  let embed = new Discord.RichEmbed()
      .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
     member.guild.channels.get('565546759364018208').send(embed)
   
});

client.on('message', msg => {
  if (msg.content === 'Salut') {
    msg.reply('Bonjour sava :)');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + "info")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Chaîne De WYNOX Clique Sur Moi',
      url: 'https://www.youtube.com/channel/UCsQXRK4-rduo-ICBzWOHcWw?view_as=subscriber',
      description: 'Voici la chaîne de WINOX N hésitez pas a faire un tour :point_up:',
      fields: [
        {
          name: "WINOXBot",
          value: "Le Créateur de se bot est WINOX :joy: "
        },
        {
          name: 'Vous avez besoin d aide ?',
          value: 'Pour avoir l aide demandé faite W.aide'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', msg => {
  if (msg.content === prefix + "aide")
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'indisponible',
      url: '',
      description: '',
      fields: [
        {
          name: "Les Infos",
          value: "Faite W.info"
        },
        {
          name: "Vous avez besoin d'aide ",
          value: 'Pour avoir l aide demandé faite W.aide'
        },
        {
          name: "Commande staff ",
          value: 'Pour kick une personne faite W.kick'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "WINOXBot#8825"
      }
    }})
})

client.on('message', message => {
  if (message.content.startsWith('W.kick')) {
    const member = message.mentions.members.first()
    
    if (!member) {
      return message.reply(`Quel utilisateur kick ? mentionné le ! :anguished:`)
    }

    if (!member.kickable) {
      return message.reply(`Je peux pas le kick. désolé! :disappointed_relieved:`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} Utilisateur Kick! :white_check_mark:`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.login('NTY2MzMxOTY0NDkyMDg3Mjk4.XLDb3g.F76_yWyf1ErHaOUFMCOjhEZFNN4');
