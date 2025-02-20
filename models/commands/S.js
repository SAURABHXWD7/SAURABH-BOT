const fs = require("fs");
module.exports.config = {
  name: "admin2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("SAURABH") == 0 ||
    event.body.indexOf("Saurabh") == 0 ||
    event.body.indexOf("saurabh") == 0 ||
    event.body.indexOf("Babu") == 0
  ) {
    const imagePath = __dirname + "/noprefix/S.png"; // Verify this path
    try {
      var msg = {
        body: "🫅 𝗦𝗔𝗨𝗥𝗔𝗕𝗛 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 🫅",
        attachment: fs.createReadStream(imagePath),
      };
      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("🫅", event.messageID, (err) => {}, true);
    } catch (error) {
      console.error("Error reading image:", error);
      api.sendMessage("Error: Could not display profile.", threadID, messageID); //Send error to chat.
    }
  }
};
module.exports.run = function({ api, event, client, __GLOBAL }) {};
