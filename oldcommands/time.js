const Discord = require('discord.js');
module.exports = {
	name: 'time',
        description: 'time',
        aliases: 'EUtime',
	execute(message) {
                
        var fullyear = new Date().getFullYear(); // current year
        var month = new Date().getMonth(); // current month
        var date = new Date().getDate(); // current day of the month
        var hours = new Date().getHours(); // current hour
        var minutes = new Date().getMinutes(); // current minute
        var seconds = new Date().getSeconds(); // current second

        const time = new Discord.MessageEmbed() //create embed message
        .setColor('#300075') // color of strip on left
	.addFields(
		{ name: 'Current Date:', value: `${fullyear}y:${month}m:${date}d`, inline: true },
		{ name: 'Current Time', value: `${hours}:${minutes}:${seconds}`, inline: true },
        )
        message.channel.send(time);
        },
};