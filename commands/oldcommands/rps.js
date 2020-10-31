
const { prefix } = require('./config.json');
const Plenght = prefix.length //returns the lenght of prefix contained in backup config.js

var path = require('path'); //used for node.js file system management.
var CommandFile = path.basename(__filename); //Current command name 
var Clenght = CommandFile.length //command lenght (rps.js = 6)
//var Fext = path.extname(CommandFile) //current command extensions
//var Elenght = Fext.length //extension lenght (.js = 3)

module.exports = {  // DO NOT USE ES6 MODULE
	name: 'rps',
	description: 'A game of Rock, Paper, Scissors!',
	aliases: ['Rock Paper Scissors'],
	usage: 'rps (rock / paper / scissors)',
	execute(message) {
		
		const source = message.content.slice(Clenght +1).toLowerCase();
		if (source == 'r' || source == 'p' || source == 's' || source == 'rock' || source == 'paper' || source == 'scissors' || source ) {
			Player();
		} else {
			Message.channel.send(`Sorry, but you need to specify either rock, paper or scissors.`);
		}
		game();

		function GetComputerChoice() {
			const GetShortChoices = ["r", "p", "s"];
			const RandomNumber = Math.floor(Math.random() * 3);

			return GetShortChoices[RandomNumber];
		} //done. use const and call this function to get roll.

		function Player(r, p, s) {
			switch (source) {

				case "r":
				case "rock":
					return r = "r"

				case "p":
				case "paper":
					return p = "p"

				case "s":
				case "scissors":
					return s = "s"


			} //done. this function decides what player picked.

			}
			function game() {
				const machinechoice = GetComputerChoice(); 
				const playerchoice = Player();

				switch (machinechoice + playerchoice) {

					case "rs":
						case "pr":
							case "sp":
								GamePlayerWin();
								break;

					case "rp":
						case "ps":
							case "sr":
								GamePlayerLoose();
								break;

					case "rr":
						case "pp":
							case "ss":
								GameDraw();
								break;
							}
			}

			function GamePlayerWin() {
				message.channel.send(`Player wins!`);
			}

			function GamePlayerLoose() {
				message.channel.send(`Player looses!`);
			}

			function GameDraw() {
				message.channel.send(`It's a draw!`);
			}
		}
	}