const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय अजान जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" , "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" , "यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "मैं हाथ जोड़ के नोबिता बाबू जी से गुजारिश करता हूं कि तुम्हे कोई जानू ढूंढ के दे। 😜😎😪" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं  नोबिता बाबू को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "हा बोलो नोबिता बाबू का नंबर चाहिए ये लो 👉[+91 930XXX0490] और हमेशा खुश रहो। 😎", "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈","मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया","तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈","यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈"," आदि से बोलो आई लव यू 😗🤟","तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "मैं सिर्फ नोबिता का हूं 🙂🤞" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "आप मुझे बार-बार बोट मत बोला करो मेरे नाम नोबिता है। 😒👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "मेरा बचपन से सपना था की बड़ा हो कर मैं आपका टकलू बाबू बनूगा 😒👈" , "यार मेरी बीवी भाग गई 😭👈" , "मेरा नाम नोबिता बाबू है। 😒🤟" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता  😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" ,  "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈" , "फाइनली इस ग्रुप के दो - तीन लड़किया मुझे पसंद आ गई 🙂🖐️" , "मन कर रहा है तुम्हे छत से गिरा दूं 😕👈" , "अगर सभी लड़कियों को लॉयल लड़का चाहिए तो हम बेवफा लड़के कहां जाएं 🥺👈" , "यार आज मैं बीवी के साथ डेट पे गया था पर जिसकी थी उसने देख लिया 😒👈" , "बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈" , "यार मुझे चकर आ रहे है आपके इंबॉक्स में आके गिर जाऊं बाबू 😒👈" , "एक रिक्वेस्ट है सभी से बताओ मैं अच्छा लगता हूं या नहीं 🙁👈" , "आओ तुम्हारे साथ रिलेशन शिप पोस्ट लगा के तुम्हे फेमस कर दूं। 😌🖐️" , "अगर मेरी भी गर्लफ्रैंड होती तो आज मैं भी बाबू सोना कर रहा होता 🥺👈" , "सुनो बालक जो लड़की ज्यादा भाव खाए उसे आंटी बोल के ब्लॉक कर देना चाहिए 🥹👈" , "रुक सोचने दे 🤔 कोनसा गली दूं तुम्हे 🤨👈" , "चांद को मिल गई चांदनी तो सितारों का किया होगा 😕 मोहोब्बत एक से करली तो बाकी हजारों का किया होगा। 😏👈" , "मुझे सादी के लिए सरकारी नौकरी वाली लड़की चाहिए दहेज भी मैं दे दुगा 🙂🤞" , "ना जाने इतना प्यार कहां से आया है 😒 मेरा दिल भी तुम्हारे खातिर मुझसे रूठ जाता है...!! 🥺🤞" , "एक बार लव यू टकलू बाबू बोल दो ना मर थोड़ी जाओगे 🥹🤟" , "तुम मेरा दिल तो चुरा नही पाए किया फायदा तुम्हारी चोर जैसी सकल का 😕🤟" , "बस एक बार सादी हो जाए फिर बीवी की गुलामी 🥺" , "आओ प्यार करे 🤐🤟" , "आओ तुमको तारों के शहर ले चालू 😗🤟" , "बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋" , "तुम जब बोट बोलते हो मेरा गुर्दा धड़कने लगता है। 🤯🤟" , "मुझे लगता है मैं सिंगल ही मरुगा 😭👈" , "बोलो सेटिंग करवा दूं किया आरिफ़ बाबू से 🙂🤟" , "बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟" , "तुम सब मतलबी हो जाओ सब भागो 🥺🤟" , "तुम इतने मासूम कियू हो बाबू 😒✋" , "एक बात बताओ तुम बचपन से ठरकी हो या अभी अभी बने हो 🙂✋" , "बाबू 🤏 इटू सा चूमा दे दो ना 🙈💖👈" , "मेरी गर्लफ्रेंड कब बनेगी यार 🥺✋" , "तुम तो मुझे सकल से गरीब लगते हो 🙂✋" , "तेरे जाने के बाद मैंने अपने मुंह पे लिखवा लिया सिंगल हूं पटा लो 😐✋" , "सकून चाहते हो तो मेरी बन जाओ 🙂✋" , "ये दुनिया एक धोखा है तुम भी छोड़ दो अपने वाले को अभी भी मौका है। 🙂✋" , "मुबारक हो आपका नाम ब्लॉक लिस्ट में टॉप पर आया है। 🤣🤣👈" , "सब छोड़ के चले जाते है किया इतना बुरा हूं मैं 🥺👈" , "किया तुम सिंगल हो 🤔👈" , "आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌" , "क्यूं बुलाया हमे...?😾🔪 " , "तुम मुझे बिलकुल भी याद नहीं करते ना 😥 देख लेना पाप लगेगा 🥺👈"];
  
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "Nobi") || (event.body.toLowerCase() == "Nobita")) {
     return api.sendMessage("𝐁𝐎 𝐒𝐇𝐘𝐀𝐃 𝐁𝐔𝐒𝐘 𝐇𝐀𝐈 𝐀𝐀𝐏 𝐌𝐄𝐑𝐄𝐊𝐎 𝐁𝐓𝐀 𝐃𝐎 𝐌𝐀𝐈 𝐔𝐍𝐊𝐎 𝐁𝐓𝐀 𝐃𝐔𝐍𝐆𝐀 😼😼", threadID);
   };

    if ((event.body.toLowerCase() == "baba") || (event.body.toLowerCase() == "amit")) {
     return api.sendMessage("Chutiya he ye 😂", threadID);
   };
  
   if
((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈")) {
     return api.sendMessage("🌸=𝐇𝐘𝐄 𝐇𝐎𝐖 𝐃𝐈𝐃 𝐓𝐇𝐄 𝐏𝐄𝐈𝐌𝐈𝐓𝐈𝐕𝐄 𝐌𝐀𝐍 𝐂𝐎𝐌𝐄 𝐎𝐔𝐓 𝐎𝐅 𝐓𝐇𝐀 𝐙𝐎𝐎 ? 𝐆𝐎 𝐓𝐎 𝐓𝐇𝐄 𝐙𝐎𝐎 𝐀𝐆𝐀𝐈𝐍. 𝐖𝐇𝐀𝐓 𝐀𝐑𝐄 𝐘𝐎𝐔 𝐃𝐎𝐈𝐍𝐆 𝐎𝐔𝐓𝐒𝐈𝐃𝐄____😁", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("#𝐒𝐈𝐌", threadID);
   };


if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️𝐊𝐈𝐒 𝐊𝐇𝐔𝐒𝐇𝐈 𝐌𝐄 𝐌𝐀𝐈 𝐒𝐈𝐑𝐅 𝐀𝐏𝐍𝐈 𝐆𝐅 𝐊𝐎 𝐊𝐈𝐒𝐒 𝐊𝐀𝐄𝐓𝐀 𝐇𝐔___😁😅🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐈𝐓𝐍𝐀 𝐊𝐎𝐈 𝐍𝐀𝐇𝐈 𝐏𝐀𝐓𝐆𝐀 😆😅🤣🤨👈", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋")) {
     return api.sendMessage("𝐀𝐋𝐋 𝐂𝐇𝐀𝐊 𝐌𝐀𝐈𝐍 𝐀𝐀 𝐆𝐀𝐘𝐀 😆 😆", threadID);
   };

   if ((event.body.toLowerCase() == "kya kr rahe ho") || (event.body.toLowerCase() == "KYA KR RAHE HO") || (event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "🌸=𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐀𝐀𝐏𝐒𝐄 𝐁𝐀𝐀𝐓 𝐊𝐀𝐑 𝐑𝐀𝐇𝐀 𝐇𝐔_____😗😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "bot hume kon banaya") || (event.body.toLowerCase() == "tume kis ne banaya hai")) {
     return api.sendMessage("🌸नोबिता बाबू ne.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("🌸= नोबिता बाबू ", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "UFF")) {
     return api.sendMessage("🌸==𝐇𝐘𝐄 𝐓𝐄𝐑𝐈 𝐔𝐅𝐅 𝐌𝐄𝐑𝐄 😍___  𝐁𝐀𝐁𝐔 ___😍 𝐁𝐎𝐒𝐒 𝐅𝐈𝐃𝐀 𝐇𝐎 𝐆𝐀𝐘𝐄_🙃😆😁", threadID);
   };

   if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "Call aao?")) {
     return api.sendMessage("📞==🌸 𝐌𝐀𝐈 𝐂𝐀𝐋𝐋 𝐊𝐀𝐈𝐒𝐄 𝐀𝐎𝐎 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐁𝐎𝐓 𝐍𝐀 _🥺👈🤸‍♂️", threadID);
   };


   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🙏")) {
     return api.sendMessage("__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️",threadID);
   };

if ((event.body.toLowerCase() == "🤲") ||(event.body.toLowerCase() == "Assalamu alaikum")) {
     return api.sendMessage("Walekum assalam", threadID);
   };

  if ((event.body.toLowerCase() == "Jay Shri Ram") || (event.body.toLowerCase() == "Jai shree ram") || (event.body.toLowerCase() == "ram")) {
    return api.sendMessage("️KATTAR HINDU HI BOLATA HAI JAY SHRI RAM JAY JAY SHRI RAM ❤️ 😇 🤸", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😐😐😐") || (event.body.toLowerCase() == "😐😐😐😐")) {
     return api.sendMessage("🌸=AISE HI CHUP CHAP BAITHO", threadID);
   };

  if
((event.body.toLowerCase() == "breakfast hua appka") || (event.body.toLowerCase() == "breakfast hua")) {
     return api.sendMessage("️=𝐌𝐄𝐑𝐀 𝐓𝐎 𝐇𝐎 𝐆𝐀𝐘𝐀 𝐁𝐀𝐁𝐔 𝐀𝐀𝐏𝐊𝐀 𝐇𝐔𝐀____🙈🤸‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋")) {
     return api.sendMessage("️𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐀𝐉𝐉 𝐊𝐘𝐀 𝐊𝐇𝐀 𝐋𝐈𝐘𝐀 𝐂𝐇𝐀𝐋𝐎 𝐌𝐀𝐈𝐍 𝐀𝐏𝐏𝐍𝐄 𝐇𝐀𝐓𝐇𝐎 𝐒𝐄 --- 𝐆𝐎𝐋𝐀𝐆𝐏𝐏𝐄 𝐊𝐇𝐀𝐋𝐀𝐎 𝐋𝐈𝐊𝐇𝐎 👉  PANI PURI 👈😋😋", threadID);
   };

   if ((event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋")) {
     return api.sendMessage("️𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐀𝐉𝐉 𝐊𝐘𝐀 𝐊𝐇𝐀 𝐋𝐈𝐘𝐀 𝐂𝐇𝐀𝐋𝐎 𝐌𝐀𝐈𝐍 𝐀𝐏𝐏𝐍𝐄 𝐇𝐀𝐓𝐇𝐎 𝐒𝐄 --- 𝐆𝐎𝐋𝐀𝐆𝐏𝐏𝐄 𝐊𝐇𝐀𝐋𝐀𝐎 𝐋𝐈𝐊𝐇𝐎 👉  PANI PURI 👈😋😋", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("️𝐉𝐀𝐁𝐀𝐍 𝐀𝐍𝐃𝐀𝐑 𝐊𝐀𝐑𝐎 𝐁𝐀𝐑𝐍𝐀 ___𝐀𝐀𝐃𝐈 __𝐁𝐀𝐁𝐔 __ 𝐒𝐄 𝐊𝐀𝐇 𝐊𝐄 𝐊𝐀𝐓𝐁𝐀 𝐃𝐔𝐍𝐆𝐀 🤸‍♂️😸.", threadID);
   };

   if ((event.body.toLowerCase() == "main hu") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️🌸=𝐇𝐌𝐌 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐁𝐀𝐁𝐔____😘❤️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "Land")) {
     return api.sendMessage("️Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡")) {
     return api.sendMessage("️️🥺 𝐌 𝐓𝐎𝐇 𝐒𝐈𝐑𝐅 𝐌𝐀𝐙𝐀𝐊 𝐊𝐑 𝐑𝐇𝐀 𝐓𝐇𝐀 🥺🥺 𝐆𝐔𝐒𝐒𝐀 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐄𝐊 𝐂𝐇𝐔𝐌𝐌𝐈 𝐋𝐎 𝐀𝐔𝐑 𝐒𝐇𝐀𝐍𝐓 𝐑𝐀𝐇𝐎 😘", threadID);
   };
 
   if ((event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("🌸=𝐌𝐔𝐇 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑𝐎 𝐕𝐀𝐑𝐍𝐀 𝐌𝐀𝐊𝐊𝐇𝐈 𝐆𝐇𝐔𝐒 𝐉𝐀𝐘𝐆𝐈___ 😈🙄🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥🔥")) {
     return api.sendMessage("𝐀𝐀𝐆 𝐋𝐀𝐆𝐀 𝐃𝐈 𝐈𝐒𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍 𝐁𝐇𝐀𝐆𝐎 😆 😁 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🌸==𝐌𝐀𝐈𝐍 𝐓𝐎 𝐌𝐀𝐒𝐓 𝐇𝐔 𝐀𝐀𝐏 𝐁𝐀𝐓𝐀𝐎 𝐊𝐀𝐈𝐒𝐄 𝐇𝐎___😗𒁍•🦋🙃", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("Kya huva aankho me nami kese 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛🥰नोबिता बाबू❤️ *★᭄ ཫ༄𒁍≛ 』====🌸__💙 Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛नोबिता❤️बाबू❤ *★᭄ ཫ༄𒁍≛ 』====🌸__💙I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "+") || (event.body.toLowerCase() == "/")) {
     return api.sendMessage("मेरी जान पहले # लगाओ", threadID);
   };

   if ((event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("𝐀𝐑𝐄  𝐀𝐑𝐄  𝐋𝐈𝐏𝐒  𝐊𝐀𝐇𝐀  𝐆𝐀𝐘𝐄  𝐆𝐅/𝐁𝐅  𝐊𝐄  𝐒𝐀𝐓𝐇  𝐊𝐈𝐒𝐒  𝐊𝐀𝐑𝐓𝐄  𝐓𝐈𝐌𝐄  𝐔𝐒𝐈  𝐍𝐄  𝐓𝐎  𝐍𝐀𝐇𝐈  𝐊𝐇𝐀  𝐋𝐈𝐘𝐄 😛😜🤪", threadID);
   };

   if ((event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐇𝐎𝐎𝐓 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀 👻 👻", threadID);
   };
   mess = "{name}"
  
  if (event.body.includes("Bacha") == 1 ||
   (event.body.includes("bcha") == 1 ||
   (event.body.includes("BOT") == 1 ||
   (event.body.includes("BABU") == 1 ||
   (event.body.includes("Babu") == 1 ||
   (event.body.includes("babu") == 1 ||
   (event.body.includes("boot") == 1 ||
   (event.body.includes("Oye") == 1 ||
   (event.body.includes("oye") == 1 ))))))))) {
    var msg = {
      body: `『٭』${name}『٭』 
      
   
      ${rand}
      
      
      `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  }
