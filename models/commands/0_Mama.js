const fs = require("fs");
module.exports.config = {
	name: "Mama",
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
	if(react.includes("mamu") ||
     react.includes("mama") || react.includes("Mama") || react.includes("MAMA") ||
react.includes("Moma") ||
react.includes("Mamu")) {
		var msg = {
				body: `𝐇𝐥𝐰 𝐌𝐚𝐦𝐚 𝐣𝐢 🙈🫣`,attachment: fs.createReadStream(__dirname + `/noprefix/Mama.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
