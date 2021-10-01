const Discord = require('Discord.JS');
const { Axios } = require('axios');

module.exports = {
    names: ['dog', 'chien'],
    description: 'get a dog picture',
    execute(message, args) {
        var body;
        const guild = global.client.guilddata.get(message.guild.id)
        var body = 'https://dog.ceo/api/breeds/image/random'

        Axios.get(body).then(response => {
            const dogSuccessEmbed = new Discord.MessageEmbed()
            .setImage(response.data[0].url)
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor('#000000')
            message.delete().then(() => {
                message.channel.send(dogSuccessEmbed);
            })
        }).catch(err => {
            console.log(err)
            message.channel.send('Error! Couldnt get the picture!').then(() => {
                message.delete();
            })
        })

    }

}