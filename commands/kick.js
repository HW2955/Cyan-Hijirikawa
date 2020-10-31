module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, args) {
		let reason = args[1];

		let Cyan = message.member.guild.me //returns bot client
		let Executor = message.guild.member(message.author); //returns author
		let Offender = message.guild.member(message.mentions.users.first()); //returns mentioned user

		if (!message.mentions.users.size) return message.channel.send(`You need to mention someone!`); //add check for id's

		if (!Offender) return message.channel.send(`I cannot find anyone by that name.`);

		if (Offender.hasPermission('KICK_MEMBERS')) return message.channel.send(`You can't kick that user!`);

		if (!Cyan.hasPermission('ADMINISTRATOR')) return CyanNoPermsHandler();

		if (!Executor.hasPermission('KICK_MEMBERS')) return message.channel.send(`You don't have required permissions`);

		if (Cyan.hasPermission('ADMINISTRATOR')) {
			try {
				CyanKickHandler();
			} catch (error) {
				message.channel.send(`Something went wrong while kicking member!`);
				console.log(error);
			}
		}

		function CyanNoPermsHandler() {
			message.channel.send('yy i dont have perms lol get gut scrub'); //goal; send message to guild owner, and channel asking for permisisons
		  }

		function CyanKickHandler() {
			  //placeholder1
			  //holder2
			  message.reply(`I will kick that user for you.`);
			  //Offender.kick([Placeholderreason]);
		  }


	},
};

/*
		let Executor = message.author.username
		let OffenderFinal = message.guild.member(message.mentions.users.first())
		let reason = `This is automatically generated reason, because ${Executor} did not give any.`

		if (!message.mentions.users.size) {
			message.channel.send(`You must mention someone to use this command!`);

		} else if (message.mentions.users.size) {
			if (message.member.hasPermission('KICK_MEMBERS')) {
				message.channel.send(`${Executor}, You are about to kick ${OffenderFinal}, are you sure? *This will expire in 15 seconds*`).then(sentMessage => {
					sentMessage.react('❎').then(() => sentMessage.react('➖').then(() => sentMessage.react('✅')));
					
					sentMessage.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❎' || reaction.emoji.name == '➖' || reaction.emoji.name == '✅'),
					{ max: 1, time: 17000}).then(collected => {
						try {
							if (collected.first().emoji.name == '✅') { //this, if not catched will return undefined error on timeout
								message.channel.send(`Kicking ${OffenderFinal} out.`);
								message.delete();
								sentMessage.delete();
								
								KickHandler();

							} else {
								message.channel.send("Aborting now.");
							}

						} catch (error) {
							message.channel.send(`I just timed out!`)
						}
				})	
				});
			} else {
				message.channel.send(`**Something happened, it might've happened because:**\n- I don't have permissions to perform this action,\n- You Don't have permissions to perform this action.`);
			}
		}

		function KickHandler(){
			if (message.member.hasPermission('KICK_MEMBERS')) {

				try {
				OffenderFinal.kick(`${reason}`);
				
				} catch (error) {
					console.log(error);
				}

			} else {
				message.channel.send(`Looks like something weird happened, if you're seeing this message it's mostlikely because your permissions were removed during command execution.`)
				return;
			}
			
		}


























message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
				{ max: 1, time: 30000 }).then(collected => {
					if (collected.first().emoji.name == '👍') {
						message.reply('kicc');
					}
				},






message.channel.send(`You are about to **kick** ${OffenderFinal}, are you sure?`).then(sentMessage => {
				sentMessage.react(EmojiHandler.abort).then(() => sentMessage.react(EmojiHandler.separator).then(() => sentMessage.react(EmojiHandler.confirm)));

		function PermissionHandler() {
			if (member.hasPermission('KICK_MEMBERS')) {
				console.log("that user cannot be kicked");	
			}
			if (message.member.hasPermission('KICK_MEMBERS')) {
				console.log("you can kick someone!");
				message.react(EmojiHandler.pass);
			}
			if (!message.member.hasPermission('KICK_MEMBERS')) {
				console.log("you cant kick anyone!");
				message.react(EmojiHandler.fail);
			}
		}
		function KickHandler() {
			OffenderFinal.kick(`${reason}`)
		}
				const filter = (reaction, user) => {
					return [`${EmojiHandler.abort}`, `${EmojiHandler.separator}`, `${EmojiHandler.confirm}`].includes(reaction.emoji.name) && user.id === message.author.id;
				};

				sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {

					let ExecutorChoiceFinal = collected.first()

					if (reaction.emoji.name === `${EmojiHandler.abort}` || `${EmojiHandler.separator}`) {
						message.channel.send("you changed your mind!");
					} else if (reaction.emoji.name === `${EmojiHandler.confirm}`) {
						message.channel.send("and its done.");
					} else {
						message.channel.send("you reacted with different emoji! aborting");
						return;
					}
				})		
		*/