const randomFile = require('random-file')
const songfolder = ('C:/Users/Cebela/Desktop/Cyan Hijirikawa in js/Show_By_Rock/songs');
module.exports = {
	name: 'song',
	description: 'kick',
	usage: '<mention|ID> [reason] [-rejoin]',
	disabled: 'false',
	execute(message, args) {
/*
		const dir = '/Show_By_Rock/images'
		randomFile(dir, (err, file) => {
			console.log(`The random file is: ${file}.`)
			message.channel.send(file)
		})
*/
		var fs = require('fs');
		var files = fs.readdirSync(songfolder)
		let chosenFile = files[Math.floor(Math.random() * files.length)]
		message.channel.send(chosenFile)
		
	}
};