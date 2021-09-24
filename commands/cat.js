const Discord = require('discord.js')
const Embeds = require('../embeds.js')
const Axios = require('axios')

const CAT_API_KEY = 'f4d75e99-7060-4ecf-84c6-2b5da587491a'

module.exports = {
    names: ['cat', 'chat'],
    description: "This command generates a cat",
    execute(message, args) {
        const guild = global.client.guilddata.get(message.guild.id)
        const link = 'https://api.thecatapi.com/v1/images/search'
        
        message.channel.send('*Please wait...*').then(message => {
            Axios.get(link, { header: { 'x-api-key': CAT_API_KEY } }).then(response => {
                const catSuccessEmbed = Embeds.catSuccessEmbed(guild.getLanguage(), response.data[0].url)
                message.channel.send(catSuccessEmbed).then(() => {
                    message.delete()
                })
            }).catch(err => {
                console.log(err)
                message.channel.send(Embeds.catErrorEmbed(guild.getLanguage())).then(() => {
                    message.delete()
                })
            })
        })
    }
}