const fs = require("fs");
module.exports.config = {
	name: "love",
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
	if(react.includes("lov") ||
     react.includes("love") || react.includes("LOVE") || react.includes("love you") ||
react.includes("Love you") ||
react.includes("🤭")) {
		var msg = {
				body: `𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐣𝐢 🙈`,attachment: fs.createReadStream(__dirname + `/noprefix/love.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
