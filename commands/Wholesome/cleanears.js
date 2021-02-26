const path = require('path');
const CommandFile = path.basename(__filename);
const Clenght = CommandFile.length

let Word = "badword"

module.exports = {
	name: 'cleanears',
	description: 'clean someones ears',
	execute(message)
	{
		if (!message.mentions.users.size) {

			let SendMessage = message.content.slice(Clenght);
			let SendMessageLow = SendMessage.toLowerCase();

			if (SendMessageLow.includes(Word)) { // super basic word filter checking if message is a "BadWord" and if so then deletes message

			message.reply(`you cant use that!`);
			return message.delete();
			}

			let AuthorDisplayName = message.member.displayName

			message.channel.send(`:sparkling_heart: ${AuthorDisplayName} Cleans ${SendMessage} ears :sparkling_heart:`);

		} else {

            let MentionDisplayName = message.guild.member(message.mentions.users.first()).displayName
			let AuthorDisplayName = message.member.displayName
			
			message.channel.send(`:sparkling_heart: ${AuthorDisplayName} Cleans ${MentionDisplayName} ears :sparkling_heart:`);

		}
	},
};