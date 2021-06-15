const Discord = require ('discord.js');
const bot = new Discord.Client();

const fetch = require("node-fetch")

//bot online and status

bot.on('ready', () => {
    console.log('Bot Online')
    bot.user.setPresence({
        activity: {
            name: 'nazOS 1.3|| Fixing commands and testing code',
            type: 'PLAYING'
        }
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '-';
    //hello there ['hello', 'there']
    // -ban user ['-ban', 'user']
    let MessageArray = message.content.split (' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

// basic commands

    if(!message.content.startsWith(prefix)) return;

    if (cmd == 'ping') {
        message.channel.send(':ping_pong: Pong!');
    }

    if(cmd == 'hammer') {
        message.channel.send('You wont get away from me, its hammer time! :hammer:');
    }

    if(cmd == 'gettag') {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Here is their tag:');} else {
            message.channel.send(`Here is their tag: ${member.user.tag}`);
        }
    }

    if(cmd == 'aboutme'){
        message.channel.send('I am AutoNaz or Akemi, Im a project from my creator, NazaroRedux. Apparently Im his first bot which is kind of a privlege in my opinon. Lets just say he spent many hours making me who I am. Thanks Naz!');
    }

    if (cmd == 'help') {
        message.channel.send('Here is all of my current commands. All begin with the "-" prefix: help, version, hammer, ping, gettag @user, payrespects, inviteinfo');
    }

    if(cmd == 'version') {
        message.channel.send('Im on nazOS 1.3');
    }

    if(cmd == 'payrespects') {
        message.channel.send('May he rest in peace :pensive:');
    }

    if(cmd == 'inviteinfo') {
        message.channel.send('Im only allowed in servers that are authorized by NazaroRedux. DM him if you want more info on inviting me')
    }
    



    //moderation

    if(cmd == 'kick') {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ sorry, you don't have the permissions to kick members!").then(m => m.delete(2500));
        }
       
        const mentionedUser = message.mentions.members.first();
        if(!mentionedUser) return message.channel.send("ay man the person who you punished isnt here")
        let reason = args.slice(1).join(' ');
        if(!reason) {reason = 'No Reason Provided'}
        mentionedUser.kick({ reason: args.slice(1).join(" ") });
        message.channel.send(`**${mentionedUser.user.tag}** was given the mini boot for ${reason}`)
    }

    if(cmd == 'ban') {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ sorry, you don't have the permissions to ban members!").then(m => m.delete(2500));
        }
        const mentionedUser = message.mentions.members.first();
        if(!mentionedUser) return message.channel.send("ay man the person who you punished isnt here")
        let reason = args.slice(1).join(' ');
        if(!reason) {reason = 'No Reason Provided'}
        mentionedUser.ban({ reason: args.slice(1).join(" ") });
        message.channel.send(`**${mentionedUser.user.tag}** was given the big boi boot for ${reason}`)
    }
})


//embed dm welcome

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
        .setTitle('Welcome to the server!')
        .setDescription(`Thanks for joining! Please do stay active, its worth it in the long shot \n**Current Member Count:** ${member.guild.memberCount}\n**Owner** ${member.guild.owner.user,tag}`)
        .setColor('#0f36d1')
        .setThumbnail(member.user.avatarURL())

    member.send(embed);
});





bot.login("ODQ4NjQ0NzA2NzQwODYzMDI3.YLPn-Q.1l0HSfrg5N3yfva1talOEO8pu_M");