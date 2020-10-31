const Discord = require('discord.js');
const path = require('path');
const CommandFile = path.basename(__filename);
const Clenght = CommandFile.length
module.exports = {
	name: 'note',
	description: 'note something',
	execute(message)
	{
		if (!message.mentions.users.size) {

            let noted = message.content.slice(Clenght +1);
            message.channel.send("noted.");
            let newEmbed = new Discord.MessageEmbed()
            .setColor('#300075') // color of strip on left
            .addFields(
                { name: 'Here is your note:', value: `${noted}`, inline: true },
        )
        .setTimestamp()
        message.author.send(newEmbed);

		} else {
            message.reply(`Sorry but you can't DM someone this way`);
        }
	},
};