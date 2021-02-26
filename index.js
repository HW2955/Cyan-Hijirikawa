const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, owner } = require('./config.json');
const { ForceActivity, ForcedActivityValue, ForcedActivityType, MaximumRNGvalue, StatusDefault, StatusPlaying, StatusStreaming, StatusListening, StatusWatching, StatusCompeting} = require('./Database/Status.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

fs.readdirSync("./commands/").forEach(dir => {
	const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${dir}/${file}`);
	client.commands.set(command.name, command);
}})

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('ready for action!');
	
	if (ForceActivity === "True") {
		client.user.setActivity(`${ForcedActivityValue}`, {type: `${ForcedActivityType}`}).then(console.log(`ForceActivity is set to "True" forcing specified values.`));

	} else SetRandomactivity()
	function SetRandomactivity() {

		let Choice = Math.floor(Math.random() * MaximumRNGvalue);
		switch(Choice) {
			case 1:
				return client.user.setActivity(`${StatusPlaying}`, {type: "PLAYING"});

				case 2:
					return client.user.setActivity(`${StatusStreaming}`, {type: "STREAMING"});

					case 3:
						return client.user.setActivity(`${StatusListening}`, {type: "LISTENING"});

						case 4:
							return client.user.setActivity(`${StatusWatching}`, {type: "WATCHING"});

							case 5:
								return client.user.setActivity(`${StatusCompeting}`, {type: "COMPETING"});

								default:
									return client.user.setActivity(`${StatusDefault}`, {Type: "PLAYING"});
								}
							}
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.disabled === "true") return message.channel.send('This command is disabled!');

	if(command.owneronly === "true" && message.author.id !== `${owner}`) return message.channel.send('This command is owneronly!');

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('there was an error trying to execute that command!'); //magic line that gives me ptsd, and flashbacks to rock paper scissors game
	}

});

client.login(token);