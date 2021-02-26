/*const PackInfo = require('../node_modules/discord.js/package.json');
module.exports = {
	name: 'info',
	description: 'display client info',
	aliases: ['information', 'sys-info'],

	execute(message) { // if you expected 700 line code then youre wrong, im way too lazy to do more that 50 :>

			let uptimesec = Math.round(process.uptime() % 60);
			let uptimemin = Math.floor((process.uptime() % 3600) / 60);
			let uptimehr = Math.floor((process.uptime() % 86400) / 3600);
			let uptimedays = Math.floor((process.uptime() % 31536000) / 86400);
			let DiscordJSver = PackInfo.version;
			let NodeJSver = process.versions.node;

			message.channel.send(`I've been running for **${uptimedays}** days, **${uptimehr}** hours, **${uptimemin}** minutes, **${uptimesec}** seconds.\nAnd **${DiscordJSver}** Discord.js, **${NodeJSver}** Node.js`);

	}
}
*/