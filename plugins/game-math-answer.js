global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝗖𝘂𝗮𝗹 𝗲𝘀 𝗿𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝗬𝗔 𝗦𝗘 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗜𝗢 𝗘𝗦𝗧𝗔 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔\n𝗧𝗛𝗜𝗦 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡 𝗛𝗔𝗦 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗕𝗘𝗘𝗡 𝗔𝗡𝗦𝗪𝗘𝗥𝗘𝗗`, m)

if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gaycoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
await conn.reply(m.chat, `*𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔*\n*𝗤𝗨𝗘 𝗜𝗡𝗦𝗔𝗡𝗢* 🙉\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*𝗚𝗔𝗡𝗔𝗦𝗧𝗘 | 𝗪𝗢𝗡*\n🏆 *${math.bonus} 𝗫𝗣*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*𝗕𝗢𝗡𝗢 | 𝗕𝗢𝗡𝗨𝗦*\n 🎁 *$500 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*𝗦𝗨 𝗗𝗜𝗡𝗘𝗥𝗢 | 𝗬𝗢𝗨𝗥 𝗠𝗢𝗡𝗘𝗬*\n💵 *$${gaycoins} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦*`, fkontak, m) 

global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*𝗦𝗘 𝗔𝗖𝗔𝗕𝗔𝗥𝗢𝗡 𝗧𝗨𝗦 𝗢𝗣𝗢𝗥𝗧𝗨𝗡𝗜𝗗𝗔𝗗𝗘𝗦*\n*𝗟𝗔 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔 𝗘𝗦 ${math.result}*\n\n*𝗬𝗢𝗨𝗥 𝗧𝗨𝗥𝗡𝗦 𝗔𝗥𝗘 𝗢𝗩𝗘𝗥*\n*𝗧𝗛𝗘 𝗔𝗡𝗦𝗪𝗘𝗥 𝗜𝗦 ${math.result}*`, m)

clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*¡𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔!*\n*𝗧𝗘 𝗤𝗨𝗘𝗗𝗔𝗡 ${global.math[id][2]} 𝗢𝗣𝗢𝗥𝗧𝗨𝗡𝗜𝗗𝗔𝗗𝗘𝗦* 🙉\n\n*𝗪𝗥𝗢𝗡𝗚 𝗔𝗡𝗦𝗪𝗘𝗥!*\n*𝗜𝗧 𝗙𝗜𝗧𝗦 𝗬𝗢𝗨 ${global.math[id][2]} 𝗧𝗨𝗥𝗡𝗦* 🙉`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 50
export default handler
