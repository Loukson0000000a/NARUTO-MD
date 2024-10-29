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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUV0aVoyb2xxT1BEMVp3U3ZxT0RsdUZxNWI4MEMzNi9TY3ZEYmQvL09VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHUzRFRNTHNpTjZjUGpLTnM3c01FNjh5U2VjRHNDUHlLMTBFcmY4TUczbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjVJU2k5M0dobVlSRXJSZmg1YXNLSjM0K1Y4U2VSVjJaZ29hb09qTUUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdGxnazgwd0VlY2FOeHBTNkEzYkhQNUxjbEhzNXFHRldwbEFxRWJCMmpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPRkU1bnhiOWptcTQzQnNJVi9IcXZoelRSYkVvN1NVd2FlWjdXaDJJMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIL2E0NGdLTWpsdmcrR05UU2wyaTV3TFA1NkhCTHFYN2l5LzZhWWRMajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdOdS9wQ3RqT3NPSnZtd2N0Q2VsMWNsTUZQZVc0dnd1eVJzTU5wWkxVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0dNQjNmRGF2b3M0eTUvS2Z0TEZZRXZnV0ZvUWUzMGY0eXJhQjBQZkJodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVTeWNpckJ5TTJjVjFVSVpld0liMjZuNUtqN2dWZlJGam5ubjNjOEMybDV6ck9QNFFZdWtHUWEwaUZ0NldxN1J2bzBzY0ZoMHQxcmFyNEFOdzdQUWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJLQmJjMnIzOVJlN05QRE1jQzlzQVgrRnFVanZ0WnZUb3NrUDFlcEpDMmdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzR21kbUs5M1NzNi1GV0d6dFJMVjl3IiwicGhvbmVJZCI6ImZiYzM5ZDAwLWU5NjUtNGY3YS04ZmYxLWY3OGViMWVmM2YzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONVhWWEtCWUs0b2NJdERhSXBmME9IR3BOblk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUs0YXBWa0lOdVdxVXA4eXhYMitYQ2dnNG9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVNRzhTVzFZIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsqfIC/wnZKWXG4gIOG0jy/wnZKbXG4gICAg4bScL/CdkpZcbiAgICAgIOG0iy/wnZKOXG4gICAgICAgIHMvIPCdkoJcbiAgICAgICAgICDhtI8v8J2SjFxuICAgICAgICAgICAgIMm0L/CdkooifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p2dCthTUZFS3IvZ0xrR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Illqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjkzSGV2WitwSzl6Y3RwRllNYVdRUlJOQmpXVFdsaWNTUkJuQXZncDYrKzdveTREMWZNdVBLQzVYdHBaekdVdEIyRlFITURhOGhVaTFHa1hlbmQ4SUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqRnRIYzJsS3cvK2hoUlB1WWtlUm8yaXRTc2JBU0UreXRTU1pQU1BlTnhCU3Zya1BWM1h0S1Z1aFZ0UGMvbVVHd1M2OTZPOUZvdjZkK0tvSUREcjFpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0k3Qnh5M1JBK1RuSXJDTVR1ZXFBa2o1YTlNSmF6MHR0NUlKQjR1eXB0QiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDE2NjcxMn0="
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
