module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		const timeTaken = message.createdTimestamp - Date.now();
		message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	},
};