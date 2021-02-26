const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./token.json');
module.exports = {
	name: 'restart',
	description: 'shutdown bot CMD',
	execute(message) {
		var author = message.author.id
		if (author == 477945546149986326) { // check message author ID with bot owners ID
			console.log("control message");

		} else {
			message.channel.send('you must be bot owner in order to execute that command');
		}},};