const fs = require("fs");
module.exports.config = {
	name: "Botboss",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") || react.includes("bossk") || react.includes("karbot")) {
		var msg = {
				body: "আসসালামু আলাইকুম🥰🥰আমি 🥰SK SHAKIL(TOM)এর ভদ্র বট!!🤍VD LINK :https://drive.google.com/file/d/11wbyVRHNStsS-17ORxt7JQpF1wIxUgPq/view?usp=drivesdk"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
