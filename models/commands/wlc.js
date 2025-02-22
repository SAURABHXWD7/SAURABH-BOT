const fs = require("fs");
module.exports.config = {
  name: "welcome",
  version: "1.0.1",
  permssion: 0,
  credits: "𝐒𝐀𝐔𝐑𝐀𝐁𝐇 𝐓𝐇𝐀𝐊𝐔𝐑", 
  prefix : true,
  description: "noprefix gif",
  category: "no prefix",
  usages: "bye",
  cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("welcome")==0 || event.body.indexOf("Welcome")==0 || event.body.indexOf("WELCOME")==0 || event.body.indexOf("wel")==0 || event.body.indexOf("wl")==0 || event.body.indexOf("स्वागत")==0) {
    var msg = {
        body: "𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐇𝐎 𝐆𝐘𝐀 𝐉𝐈 🙂🖐️",
        attachment: fs.createReadStream(__dirname + `/noprefix/wlc.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }