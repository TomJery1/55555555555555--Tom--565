module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 🥵SK SHAKIL(TOM) 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : Islam
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Rangpur, Bangladesh
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Rangpur.Lalmonirhat. patgram
𝐆𝐞𝐧𝐝𝐞𝐫.   : Male
𝐀𝐠𝐞           : 17+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : Single Life Is Vest🥵💌
𝐖𝐨𝐫𝐤        : College 
𝐆𝐦𝐚𝐢𝐥       : xaikotom0@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/01918546009
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/.......
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/VUDA.KHOR.TOM
BOSS GF :https://scontent.xx.fbcdn.net/v/t42.3356-2/454174703_7982046358557521_2710714547772207834_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeGiiRWfxMlAaG15ukGjLX0gQIei1FN67YpAh6LUU3rtip2vBX1WWo2_jhjM70ANCYBQFSV_gcIoJAO1VpdFrLOh&_nc_ohc=umANkS_-NbgQ7kNvgGZKI1C&_nc_ht=scontent.xx&oh=03_Q7cD1QHF43791U-W_YoY0_431_-jWjRUvykr3p9ns2pNGqq5Xw&oe=66B6AACA&dl=1`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61552248422194/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
