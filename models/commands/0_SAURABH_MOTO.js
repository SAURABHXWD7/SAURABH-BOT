const fs = require("fs");
module.exports.config = {
	name: "motu",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "SAURABH THAKUR", 
	description: "THIS BOT IS MR SAURABH THAKUR",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("motu") ||
     react.includes("Motu") || react.includes("moti") || react.includes("Moti") ||
react.includes("MOTI") ||
react.includes("Moto")) {
		var msg = {
				body: `𝐌𝐨𝐭𝐨 𝐣𝐢 🙈`,attachment: fs.createReadStream(__dirname + `/noprefix/motu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
