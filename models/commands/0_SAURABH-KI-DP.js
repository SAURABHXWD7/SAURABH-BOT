const fs = require("fs");
module.exports.config = {
  name: "Saurabh",
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
  if (event.body.indexOf("saurabh")==0 || event.body.indexOf("Saurabh")==0 || event.body.indexOf("SAURABH")==0 || event.body.indexOf("saurabh babu")==0 || event.body.indexOf("Saurabh Babu")==0 || event.body.indexOf("@「๛⃝₍𝐒͜͡𝐚𝐮𝐫͜͡𝐚𝐛𝐡₎̚ 」࿐『𝐱͜͡⃝ᴆ』浴'")==0) {
    var msg = {
        body: "𝐃𝐄𝐊𝐇𝐎 𝐌𝐄 𝐀 𝐆𝐀𝐘𝐀 𝐀𝐀𝐏𝐊𝐀 𝐒𝐀𝐔𝐑𝐀𝐁𝐇 𝐓𝐇𝐀𝐊𝐔𝐑 🙈 🤭 𓆩♡𓆪",
        attachment: fs.createReadStream(__dirname + `/cache/Saurabh.jpg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }