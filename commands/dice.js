module.exports = {
	name: 'dice',
	description: 'dice, returns number between 1-6',
	execute(message) {
		let min = 1;
		let max = 6;
		const rng = Math.floor(Math.random() * (max - min)) + min;

		message.channel.send(`You rolled the dice... it's ${rng}`);

		}
	};