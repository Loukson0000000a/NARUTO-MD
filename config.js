//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:oKVMJfuvQhDdLOoLhaWqEgNeGJPgQoMA@autorack.proxy.rlwy.net:47012";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://loukson2_user:nvg0X63mvZBlHe0AiKcX44uTW0IEafkR@dpg-cs37nce8ii6s738htpjg-a.oregon-postgres.render.com/loukson2";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Loukson/NARUTO-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dmKqfTP.jpg,https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dbuMtaa.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0R4M1hxWkNFbEJVZjNJSXU1YWpUc3JDRGNzRW1RUUw5cWFIT0o2TytFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFlhMXN6a0QzOUVXS3pZd0tSdGZvVXZPOTN4Vks0Yk1zR2VwY25DODlqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTFljNHBOeHVGb3NBY3g2WCttcHBkZ3NMMS9VTGRmTDg4cFIxc0JZR0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTblNiaU90NDkwQzh2cElLYU5tZCtiZDROaytScUU0M093SGF2elhjYXdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHM01yYUxFb1p6QzFNOFJmaVRMSnRUNytiYjMyRlpDSmdrd1Nidmc0V1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMVXN4eEZwYXlVYUV4OUdQZW8zRmpKejNidjlPdHJnVkptbGJWMUF3UzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Z5aTZjdHR3Mmxwejd4Mkx0dDNvcmQ3RWdMOE05Wm9XaHdKSmlqU1ZrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1ZheHphNDM2OFdoOW12eHluQ0h3Y2Ywb1VncDBYQkJOZ0c0eUFWbXNXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFyQmtQS0phRENJQWZCcUpJR2NtaGpXQWR2V1B3bVFBQTdqQ1UwNmlkYTVRNVk0L04wWTlxSW4xVCswVzZiUVBRdk01M2JTbEp5dkxHWWQ3UHVrNkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlgvYUM2a3NhM3d2RFJQSmdGSEVPcURxZFZPV1pUckI4TUhiN3hTR3lMUEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVVZEFSUHM5UUJxVkx2UXFOQ1h6TkEiLCJwaG9uZUlkIjoiOTNhNjVhYmUtZDM3Ny00N2JlLTg2ZDMtMGIxYzlkYThhMGE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLSkU5SlMzWUdrV1FrLzJ4MGZYYnpQSm9POD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeEVZYUlmRU9GWURxbkMzREQwdmI3eXBYQ1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0ZaTFZLWTIiLCJtZSI6eyJpZCI6IjI0MjA1NjMwMDMwMDo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcVdpV0VRcXBhVHVRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHUDBYcVJnVjdXcEk4Q1ZPTXlvbHB5UUh0SitHTTRHcmtyVzRVaTlOQzFBPSIsImFjY291bnRTaWduYXR1cmUiOiJCd3dmNTdka0RZSWZBajV0eXpCME9RRDRPd2pTZW1GWStHN2VLWngzZFdhRjRESk5BS0hoVG5EYzJvdHFqd3ArNHpuQjFZMHg2UHJoMzBLL3Z3MFBEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN093VU5PUGdFakZrL3lEMzlGSjdpaDVLeHVnL21lWXplL2tlZVNBREN6TXA4YStPUHpadStrSzZSei9oMVMrWXRiNUhBaTlwYUI4MTNWVzNjSU51Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNTYzMDAzMDA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSajlGNmtZRmUxcVNQQWxUak1xSmFja0I3U2Zoak9CcTVLMXVGSXZUUXRRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDY0NTY5fQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
