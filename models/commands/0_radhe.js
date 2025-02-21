const fs = require("fs");
module.exports.config = {
	name: "mm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "Don't Change Credits",
	commandCategory: "no prefix",
	usages: "Radhe",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Jay shri radhe") || react.includes("radhe radhe") ||
react.includes("jay shri krishna") ||
react.includes("krishna")) {
    var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/Radhe.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }