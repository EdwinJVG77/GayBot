import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen11
let img =  './lib/img/Menu.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `
*╭━━━━━━━━━━━━━━━━━*
*┃➯ 𝗛𝗼𝗹𝗮, ${taguser}*
*┃➯ 𝗢𝘄𝗻𝗲𝗿: 𝗘𝗱𝘄𝗶𝗻*
*┃➯ 𝗙𝗲𝗰𝗵𝗮: ${date}*
*┃➯ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗮𝗰𝘁𝗶𝘃𝗼: ${uptime}*
*┃➯ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀: ${rtotalreg}*
*╰━━━━━━━━━━━━━━━━━*

*╭━━━━━━━━━━━━━━━━━*
*┃ 🧩 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 🧩*
*┃━━━━━━━━━━━━━━━━━*
*┃🧩➯ ${usedPrefix}sticker | s <imagen | video>*
*┃🧩➯ ${usedPrefix}sticker | s <url de tipo jpg>*
*┃🧩➯ ${usedPrefix}scircle | círculo <imagen>*
*┃🧩➯ ${usedPrefix}stickermarker | cs*
*┃🧩➯ ${usedPrefix}stickerfilter | cs2*
*┃🧩➯ ${usedPrefix}emojimix <👻+🙉>*
*┃🧩➯ ${usedPrefix}attp <texto>*
*┃🧩➯ ${usedPrefix}attp2 <texto>*
*┃🧩➯ ${usedPrefix}ttp <texto>*
*┃🧩➯ ${usedPrefix}ttp2 <texto>*
*┃🧩➯ ${usedPrefix}ttp3 <texto>*
*┃🧩➯ ${usedPrefix}ttp4 <texto>*
*┃🧩➯ ${usedPrefix}ttp5 <texto>*
*┃🧩➯ ${usedPrefix}ttp6 <texto>*
*╰━━━━━━━━━━━━━━━━━*

*╭━━━━━━━━━━━━━━━━━*
*┃ 🧩 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗗𝗜𝗡𝗔𝗠𝗜𝗖𝗢𝗦 🧩*
*┃━━━━━━━━━━━━━━━━━*
*┃🧩➯ ${usedPrefix}palmaditas | pat <@tag>*
*┃🧩➯ ${usedPrefix}bofetada | slap <@tag>*
*┃🧩➯ ${usedPrefix}golpear <@tag>*
*┃🧩➯ ${usedPrefix}besar2 | kiss2 <@tag>*
*┃🧩➯ ${usedPrefix}alimentar | food <@tag>*
*╰━━━━━━━━━━━━━━━━━*

*╭━━━━━━━━━━━━━━━━━*
*┃ 🧩 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 🧩*
*┃━━━━━━━━━━━━━━━━━*
*┃🧩➯ ${usedPrefix}wm <packname | author>*
*┃🧩➯ ${usedPrefix}wm <texto1 | texto2>*
*╰━━━━━━━━━━━━━━━━━*`.trim()
if (m.isGroup) {

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝗜𝗡𝗙𝗢❗] 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗧𝗜𝗘𝗡𝗘 𝗨𝗡 𝗘𝗥𝗥𝗢𝗥 𝗬 𝗡𝗢 𝗙𝗨𝗘 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗘𝗡𝗩𝗜𝗔𝗥𝗟𝗢, 𝗥𝗘𝗣𝗢𝗥𝗧𝗘𝗟𝗢 𝗔 𝗘𝗟 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧*', m)
}}
handler.command = /^(menustickers|Menustickers|stickers)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
