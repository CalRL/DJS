const Discord = require("discord.js");
const args = message.content.split(" ");
const errors = require("./errors.js");

module.exports = {
  names: ["avi", "avatar"],
  description: "Get a user's pfp",
  execute(message, args) {
    if (args.length === 0) {
      message.channel.send("You need to mention someone!");
      return;
    } else {
      const user = message.mentions.users.first;
      const aviEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`)
        .setColor("#000000")
        .setImage(user.displayAvatarURL);
      message.channel.send(aviEmbed);
    }
  },
};
