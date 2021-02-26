const Discord = require('discord.js');
const path = require('path');
const CommandFile = path.basename(__filename);
const Clenght = CommandFile.length
module.exports = {
	name: 'say',
	description: 'say something',
	execute(message, args)
	{
        // No args
        if (!args[0]) {
            try {
                message.reply("Please provide arg1")
            } catch (error) {
                console.log(error);
            }
            
        } else if (args[0]) {
            return console.log(args[0]);
        }
	},
};