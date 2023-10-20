let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️ ¡𝗛𝗘𝗬! 𝗘𝗦𝗣𝗘𝗥𝗔 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔 𝗥𝗢𝗕𝗔𝗥*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗣𝗔𝗥𝗔 𝗥𝗢𝗕𝗔𝗥*`
if (!(who in global.db.data.users)) throw `${lenguajeGB['smsAvisoAG']()}*𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗨𝗘𝗡𝗧𝗥𝗔 𝗘𝗡 𝗠𝗜 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦.*`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`😿 *@${who.split`@`[0]} tiene menos de ${ro} XP No robes a un pobre :v*`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`*𝗥𝗢𝗕𝗔𝗦𝗧𝗘 ${rob} 𝗫𝗣 𝗔 @${who.split`@`[0]}* 💰`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['econ']
handler.command = ['robar', 'rob']
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " 𝗛𝗢𝗥𝗔(𝗦) " + minutes + " 𝗠𝗜𝗡𝗨𝗧𝗢(𝗦)"}

