const Discord = require("Discord.JS");

/* 
Pre requirements;
Use a command to set a reminder, BOT DM's user and alerts them after the time is up.
Unit system: Months; Days; Hours; Minutes;
Grab user's ID
dateTo system.

*/

module.exports = {
  execute(message, args) {
    var remindUser;
    let userId = message.author.id;
    let timeNumber = args[0];
    let unit = args[1];
    var time = timeNumber * Unit;

    var { months, month, mo } = Math.floor(distance / (1000 * 60 * 60 * 24));
    var { days, day, d } = Math.floor(distance / (1000 * 60 * 60 * 24));
    var { hours, hour, hrs, h } = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var { minutes, minute, mins, m } = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (!time || !unit) {
      return;
    } else {
      var endDate = new Date(time);
      var x = setInterval(function () {
        if (distance < 0) message.channel(userId).send("Timer is up!");
      });
    }
  },
};
