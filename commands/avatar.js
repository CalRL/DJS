const Discord = require('discord.js')
const args = message.content.split(' ')
const errors = require('./errors.js')

module.exports = {
    names: ['avi', 'avatar'],
    description: "Get a user's pfp",
execute(message, args) {
    if(args.length === 0)
    message.channel.send('You need to mention someone!')
    }
}