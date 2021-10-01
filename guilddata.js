const Discord = require('discord.js')
const Embeds = require('../embeds.js')
const fs = require('fs')

class Guild {
    constructor(id, prefix) {
        this.id = id
        this.prefix = prefix

    }
    getId(){
        this.id = id
    }
    getPrefix(){
        this.prefix = prefix
    }
    setPrefix(newPrefix){
        this.prefix = newPrefix
    }
    getLogsId(){
        this.logsId = logsId
    }
    toString() {
        return JSON.stringify({
            id: this.id,
            prefix: this.prefix,
            language: this.language,
            inviteDate: this.inviteDate,
            welcomeMessage: this.welcomeMessage
        })
    }
}

function saveData() {
    for (var entry of this.client.guilddata.entries()) {
        var key = entry[0],
            value = entry[1];

        fs.writeFileSync(`./data/${key}.json`, value.toString())
        console.log('[Data] Saved guild: ' + key)
    }
}

function loadData() {
    const dataFiles = fs.readdirSync('./data').filter(file => file.endsWith('.json'));
    for (const file of dataFiles) {
        const data = require(`../data/${file}`);
        this.client.guilddata.set(data.id, new Guild(data.id, data.prefix, data.language, data.inviteDate, data.welcomeMessage))
        console.log('[Data] Loaded guild: ' + data.id)
    }
}

module.exports = {
    setup,
    loadData,
    saveData
}

