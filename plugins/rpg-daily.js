const free = 5000;
const prem = 20000;

let handler = async (m, {isPrems}) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000;
  if (new Date() - global.db.data.users[m.sender].lastclaim < 86400000)
    throw `*𝗬𝗔 𝗥𝗘𝗖𝗟𝗔𝗠𝗔𝗦𝗧𝗘 𝗧𝗨 𝗥𝗘𝗚𝗔𝗟𝗢* 🎁\n*𝗩𝗨𝗘𝗟𝗩𝗘 𝗘𝗡 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔 𝗥𝗘𝗖𝗟𝗔𝗠𝗔𝗥*\n\n*𝗬𝗢𝗨 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗖𝗟𝗔𝗜𝗠𝗘𝗗 𝗬𝗢𝗨𝗥 𝗚𝗜𝗙𝗧* 🎁\n*𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 𝗜𝗡 ${msToTime(time - new Date())} 𝗧𝗢 𝗖𝗟𝗔𝗜𝗠 𝗔𝗚𝗔𝗜𝗡*`;
  global.db.data.users[m.sender].exp += isPrems ? prem : free;
  m.reply(`
🎁 *RECOMPENSA DIARIA*
▢ *Has recibido:*
🆙 *XP* : +${isPrems ? prem : free}`);
  global.db.data.users[m.sender].lastclaim = new Date() * 1;
};
handler.help = ["daily"];
handler.tags = ["xp"];
handler.command = ["daily", "claim"];

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + " 𝗛 𝗬 " + minutes + " 𝗠";
}
