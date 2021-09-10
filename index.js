const Discord = require('Discord.JS')
const chalk = require('chalk')
const { get } = require('node-superfetch')

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commands = require('./commands/commands.js')

bot.on('message', (msg) => {
    if(!msg.content.startsWith(PREFIX)) return
    if(message.author.bot) return
    if(message.author.id === bot.user.id) return

    const args = message.content.split(' ')
    let cmd = args.shift();

    if(!bot.commands.has(cmd)) return

    const command = bot.commands.get(cmd);
    const isAdmin = msg.member.hasPermission('ADMINISTRATOR')

    if(command.admin && !isAdmin) return

    bot.on('guildCreate', () => updateStatus())
    bot.on('guildRemove', () => updateStatus())
    bot.on('guildMemberAdd', () => updateStatus())
    bot.on('guildMemberRemove', () => updateStatus())

    const updateStatus = () => {
        let members = 0;
        let guilds = 0;
        bot.guilds.forEach((guild) => {
            members += guild.memberCount
            guilds++
        })
        bot.user.setActivity(`${members} people in ${guilds} servers`, { type: "WATCHING" })
    }

    
})