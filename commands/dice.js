module.exports = {
	name: 'dice',
	description: 'dice, returns number between 1-6',
	execute(message, args) {
		let min = 1;
		let max = 6;
		const rng = Math.floor(Math.random() * (max - min)) + min;
		
		switch (rng) {
			case 1:
				message.channel.send(`${rng}`);
				break;

				case 2:
					message.channel.send(`${rng}`);
					break;

					case 3:
						message.channel.send(`${rng}`);
						break;

						case 4:
							message.channel.send(`${rng}`);
							break;

							case 5:
								message.channel.send(`${rng}`);
								break;

								case 6:
									message.channel.send(`${rng}`);
									break;

									default:
										message.channel.send(`RNG returned invalid value, or not number between 1-6, returned: ${rng}`);
											let author = message.author.id //message author ID
											let authorname = message.author.username //message author current username
											let authornamediscr = message.author.discriminator //message author discrimator
											let guildid = message.guild.id
											console.log(`an error has occured while trying to execute "RNG", command executed by ${author}(${authorname}#${authornamediscr}) in guild${guildid}`)
										break;
		}},};



/* yanderedev way of coding this shit
		const min = 1;
		const max = 6;
		const rng = Math.floor(Math.random() * (max - min)) + min;

		if (rng = 1) {
			message.channel.send(`${rng} = 1`);
		} else if (rng = 2) {
			message.channel.send(`${rng} = 2`);
		} else if (rng = 3) {
			message.channel.send(`${rng} = 3`);
		} else if (rng = 4) {
			message.channel.send(`${rng} = 4`);
		} else if (rng = 5) {
			message.channel.send(`${rng} = 5`);
		} else if (rng = 6) {
			message.channel.send(`${rng} = 6`);
		}

		*/