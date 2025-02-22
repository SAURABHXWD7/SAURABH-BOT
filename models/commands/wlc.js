const fs = require("fs");
module.exports.config = {
	name: "Radhe-radhe",
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
	if(react.includes("wel") ||
     react.includes("Welcome") || react.includes("Wlc") || react.includes("welcome") ||
react.includes("wlc") ||
react.includes("WELCOME")) {
		var msg = {
				body: `𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐇𝐎 𝐆𝐘𝐀 𝐉𝐈 🙂`,attachment: fs.createReadStream(__dirname + `/noprefix/wlc.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
