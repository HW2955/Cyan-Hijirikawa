const path = require('path');
const CommandFile = path.basename(__filename);
const Clenght = CommandFile.length

let Word = "badword"

module.exports = {
	name: 'hug',
	description: 'hug someone!',
	execute(message, args)
	{
		if (!args) {
			message.channel.send('noargsprovided.then(=>console.log(`you didnt provide any args fucking retard fucking look: ${args[0]}`);')
		}

		if (args) {
			try {
				message.channel.send('trynna do magic shit now');
				adada3
			} catch (error) {
				message.channel.send(`server.lang.responses.setpurgelimit`)
			}
		}
	}
};