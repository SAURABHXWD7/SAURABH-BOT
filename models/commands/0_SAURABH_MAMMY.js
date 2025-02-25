const fs = require("fs");
module.exports.config = {
	name: "mammy",
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
	if(react.includes("😒") ||
     react.includes("bacha") || react.includes("Baby") || react.includes("Baacha") ||
react.includes("bachaa") ||
react.includes("Bacha")) {
		var msg = {
				body: `𝐊𝐞𝐬𝐞 𝐡𝐨 𝐦𝐚𝐦𝐦𝐲 𝐣𝐢`,attachment: fs.createReadStream(__dirname + `/noprefix/mammy.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
