const Discord = require('discord.js')
const Embeds = require('../embeds.js')
const fs = require('fs')

class Guild {
    constructor(id, prefix, language) {
        this.id = id
        this.prefix = prefix
        this.language = language
    }
    getId(){
        this.id = id
    }
    getPrefix(){
        this.prefix = prefix
    }
    setPrefix(){
        this.prefix = newPrefix
    }
}

