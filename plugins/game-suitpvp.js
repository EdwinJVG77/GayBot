let handler = m => m
handler.before = async function (m) {
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|Aceptar|acerta|aceptar|gas|aceptare?|nao|Rechazar|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `${lenguajeGB['smsAvisoAG']()}*@${room.p2.split`@`[0]} 𝗥𝗘𝗖𝗛𝗔𝗭𝗢 𝗘𝗟 𝗣𝗩𝗣, 𝗘𝗟 𝗝𝗨𝗘𝗚𝗢 𝗦𝗘 𝗖𝗔𝗡𝗖𝗘𝗟𝗔*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play' 
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `${lenguajeGB['smsAvisoIIG']()}🎮 *𝗘𝗟 𝗝𝗨𝗘𝗚𝗢 𝗖𝗢𝗠𝗜𝗘𝗡𝗭𝗔, 𝗟𝗔𝗦 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦 𝗛𝗔𝗡 𝗦𝗜𝗗𝗢 𝗘𝗡𝗩𝗜𝗔𝗗𝗔𝗦 𝗔 𝗟𝗢𝗦 𝗖𝗛𝗔𝗧𝗦 𝗣𝗥𝗜𝗩𝗔𝗗𝗢𝗦 @${room.p.split`@`[0]} 𝗬 @${room.p2.split`@`[0]}*\n\n*𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘𝗡 𝗨𝗡𝗔 𝗢𝗣𝗖𝗜𝗢𝗡 𝗘𝗡 𝗦𝗨𝗦 𝗖𝗛𝗔𝗧𝗦 𝗣𝗥𝗜𝗩𝗔𝗗𝗢𝗦 𝗗𝗘*\n\n*𝗘𝗟𝗘𝗚𝗜𝗥 𝗢𝗣𝗖𝗜𝗢𝗡 𝗘𝗡: wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let comienzop = `${lenguajeGB['smsAvisoIIG']()}*𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗨𝗡𝗔 𝗗𝗘 𝗟𝗔𝗦 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘𝗦 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦*\n\n➯ Piedra\n➯ Papel\n➯ Tijera\n\n*Responda al mensaje con la opción*`
let comienzop2 = `${lenguajeGB['smsAvisoIIG']()}𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗨𝗡𝗔 𝗗𝗘 𝗟𝗔𝗦 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘𝗦 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦\n\n➯ Piedra\n➯ Papel\n➯ Tijera\n\n*Responda al mensaje con la opción*`
   
if (!room.pilih) this.sendMessage(room.p, { text: comienzop }, { quoted: fkontak })  
if (!room.pilih2) this.sendMessage(room.p2, { text: comienzop2 }, { quoted: fkontak })
room.waktu_milih = setTimeout(() => {
let iniciativa = `${lenguajeGB['smsAvisoAG']()}*𝗡𝗜𝗡𝗚𝗨𝗡 𝗝𝗨𝗚𝗔𝗗𝗢𝗥 𝗘𝗠𝗣𝗘𝗭𝗢 𝗘𝗟 𝗝𝗨𝗘𝗚𝗢, 𝗘𝗟 𝗣𝗩𝗣 𝗦𝗘 𝗛𝗔 𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗗𝗢*`                              
if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, { text: iniciativa }, { quoted: fkontak })
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `${lenguajeGB['smsAvisoAG']()} *@${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝗡𝗢 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘 𝗡𝗜𝗡𝗚𝗨𝗡𝗔 𝗢𝗣𝗖𝗜𝗢𝗡, 𝗙𝗜𝗡 𝗗𝗘𝗟 𝗣𝗩𝗣*`
this.sendMessage(m.chat, { text: textnull }, { quoted: fkontak }, { mentions: this.parseMention(textnull) })
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tijera/i
let b = /piedra/i
let k = /papel/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`✅ *𝗛𝗔𝗦 𝗘𝗟𝗘𝗚𝗜𝗗𝗢 ${m.text}, 𝗥𝗘𝗚𝗥𝗘𝗦𝗔 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝗬* ${room.pilih2 ? `*𝗥𝗘𝗩𝗜𝗦𝗔 𝗟𝗢𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*` : '*𝗘𝗦𝗣𝗘𝗥𝗔 𝗟𝗢𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*'}`) 
if (!room.pilih2) this.reply(room.p2, `${lenguajeGB['smsAvisoIIG']()}*𝗘𝗟 𝗢𝗣𝗢𝗡𝗘𝗡𝗧𝗘 𝗛𝗔 𝗘𝗟𝗘𝗚𝗜𝗗𝗢, 𝗘𝗦 𝗧𝗨 𝗧𝗨𝗥𝗡𝗢 𝗗𝗘 𝗘𝗟𝗘𝗚𝗜𝗥*`, fkontak, 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`✅ *𝗛𝗔𝗦 𝗘𝗟𝗘𝗚𝗜𝗗𝗢 ${m.text}, 𝗥𝗘𝗚𝗥𝗘𝗦𝗔 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝗬* ${room.pilih ? `*𝗥𝗘𝗩𝗜𝗦𝗔 𝗟𝗢𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*` : '*𝗘𝗦𝗣𝗘𝗥𝗔 𝗟𝗢𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*'}`)
if (!room.pilih) this.reply(room.p, `${lenguajeGB['smsAvisoIIG']()}*𝗘𝗟 𝗢𝗣𝗢𝗡𝗘𝗡𝗧𝗘 𝗛𝗔 𝗘𝗟𝗘𝗚𝗜𝗗𝗢, 𝗘𝗦 𝗧𝗨 𝗧𝗨𝗥𝗡𝗢*`, fkontak, 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 

this.reply(room.asal, `🥳 *𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦 𝗗𝗘𝗟 𝗣𝗩𝗣*\n\n${tie ? '🤝 ¡𝗘𝗠𝗣𝗔𝗧𝗘!' : ''}\n*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *𝗚𝗔𝗡𝗢 🥳 ${room.poin} XP*` : `*𝗣𝗘𝗥𝗗𝗜𝗢 🤡 ${room.poin_lose} XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? `*𝗚𝗔𝗡𝗢 🥳 ${room.poin} XP*` : ` *𝗣𝗘𝗥𝗗𝗜𝗢 🤡 ${room.poin_lose} XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
