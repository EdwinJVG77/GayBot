let timeout = 60000
let poin = 600 
let poin_lose = -100
let poin_bot = 200
global.suit = global.suit ? global.suit : {}
let handler = async (m, { conn, usedPrefix, command, text }) => {
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}*𝗧𝗘𝗥𝗠𝗜𝗡𝗔 𝗧𝗨 𝗣𝗔𝗥𝗧𝗜𝗗𝗔 𝗔𝗡𝗧𝗘𝗦 𝗗𝗘 𝗜𝗡𝗜𝗖𝗜𝗔𝗥 𝗢𝗧𝗥𝗔*`
let textquien = `${lenguajeGB['smsAvisoMG']()}*¿𝗔 𝗤𝗨𝗜𝗘𝗡 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗗𝗘𝗦𝗔𝗙𝗜𝗔𝗥?, 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔 𝗨𝗡𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} @${global.prems}*`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {quoted: fkontak }, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `${lenguajeGB['smsAvisoIIG']()}*𝗟𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔 𝗔 𝗟𝗔 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘 𝗗𝗘𝗦𝗔𝗙𝗜𝗔𝗥 𝗘𝗦𝗧𝗔 𝗘𝗡 𝗣𝗔𝗥𝗧𝗜𝗗𝗔, 𝗘𝗦𝗣𝗘𝗥𝗘 𝗔 𝗤𝗨𝗘 𝗧𝗘𝗥𝗠𝗜𝗡𝗘 𝗗𝗘 𝗝𝗨𝗚𝗔𝗥*`
let id = 'suit_' + new Date() * 1
let caption = `${lenguajeGB['smsAvisoIIG']()}*🎮👾 𝗚𝗔𝗠𝗘𝗦 - 𝗣𝗩𝗣 - 𝗚𝗔𝗠𝗘𝗦 🎮👾*\n\n*@${m.sender.split`@`[0]} 𝗗𝗘𝗦𝗔𝗙𝗜𝗔 𝗔 @${m.mentionedJid[0].split`@`[0]} 𝗔 𝗨𝗡 𝗣𝗩𝗣 𝗗𝗘 𝗣𝗜𝗘𝗗𝗥𝗔, 𝗣𝗔𝗣𝗘𝗟 𝗢 𝗧𝗜𝗝𝗘𝗥𝗔*\n\n_Escribe (aceptar) para aceptar_\n_Escribe (rechazar) para rechazar_`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendMessage(m.chat, { text: caption }, {mentions: conn.parseMention(caption)}),
//await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}⏳ *𝗦𝗘 𝗔𝗚𝗢𝗧𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢 𝗗𝗘 𝗘𝗦𝗣𝗘𝗥𝗔, 𝗘𝗟 𝗣𝗩𝗣 𝗦𝗘 𝗖𝗔𝗡𝗖𝗘𝗟𝗔*`, m)
  
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt|pvp)$/i
handler.group = true
handler.game = true
handler.money = 100
export default handler