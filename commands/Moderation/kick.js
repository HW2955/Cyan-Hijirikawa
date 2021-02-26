module.exports = {
	name: 'kick',
	description: 'kick',
	usage: '<mention|ID> [reason] [-rejoin]',
	disabled: 'false',
	execute(message, args) {

		let Cyan = message.member.guild.me //returns bot client
		let Executor = message.guild.member(message.author); //returns author
		//let Offender = message.guild.member(message.mentions.users.first()) || message.guild.members.fetch(args[0]); //returns mentioned user
		let Content = message.content.split(' ').slice(1);
		let reason = Content.slice(1).join(' ');

		let Offender = async () => {
			return await message.guild.members.get(args[0]);
		}
		console.log(message.guild.members.cache.get(args[0]))
		// Was offender mentioned?
		if (!Offender) return message.channel.send(`You need to mention someone or give me their ID!`);

		// Does offender have permissions preventing him from being kicked?
		if (Offender.hasPermission('KICK_MEMBERS')) return message.reply(`You can't kick that user!`);

		// Does cyan have permisisons to kick offender?
		if (!Cyan.hasPermission('ADMINISTRATOR')) return CyanNoPermsHandler();

		// Does executor have permissions to kick offender?
		if (!Executor.hasPermission('KICK_MEMBERS')) return message.channel.send(`You don't have required permissions`);

		// If cyan has permissions then try kicking offender
		if (Cyan.hasPermission('ADMINISTRATOR')) {
			try {
				if (!reason) {
					reason = "This is automatically generated because $"
				}
				CyanKickHandler();
			} catch (error) {
				message.channel.send(`Something went wrong while kicking member!`); //most likely they are unavailable lolz
				console.log(error);
			}
		}

		function CyanNoPermsHandler() {
			message.channel.send('yy i dont have perms lol get gut scrub'); //goal; send message to guild owner, and channel asking for permisisons
		  }

		function CyanKickHandler() {
			if (message.content.endsWith("-rejoin")) {
				message.reply(`i will kick that user for you and they will be invited back`); //not really KEKW
			}

			  message.reply(`I will kick that user for you.`);
			  //Offender.kick({reason: banReason})
		  }
	},
};

/*
message.guild.members.cache.get(args[0]); returns null
message.guild.members.fetch(args[0]); returns undefined
message.guild.member(args[0]) returns undefined
message.guild.members.get(args);

message.guild.role.cache.get('Role ID')
*/