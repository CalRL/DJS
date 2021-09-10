const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    loadCommands(client) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js') && file != "commands.js");
        for (const file of commandFiles) {
            const command = require(`./${file}`);
    
            client.commands.set(command.names, command);
        }
    }
}
