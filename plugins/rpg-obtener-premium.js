let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗠𝗜𝗡𝗨𝗧𝗢𝗦*\n*${gata} ${rpgshop.emoticon('limit')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('limit')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('limit')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.limit -= gata * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
/*conn.sendButton(m.chat,`${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*`, `_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗠𝗜𝗡𝗨𝗧𝗢𝗦*\n* ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('kyubi')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('kyubi')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
/*await conn.sendButton(m.chat,`${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('kyubi')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('kyubi')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('kyubi')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*`, `_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗠𝗜𝗡𝗨𝗧𝗢𝗦*\n*${gata} ${rpgshop.emoticon('emerald')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('emerald')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('emerald')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
/*await conn.sendButton(m.chat,`${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('emerald')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('emerald')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('emerald')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*`, `_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗛𝗢𝗥𝗔(𝗦)*\n*${gata} ${rpgshop.emoticon('trash')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('trash')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('trash')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.trash -= gata * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
/*await conn.sendButton(m.chat,`${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('trash')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('trash')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('trash')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} 𝗛𝗢𝗥𝗔(𝗦)*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*`, `_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗛𝗢𝗥𝗔(𝗦)*\n*${gata} ${rpgshop.emoticon('berlian')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('berlian')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('berlian')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.berlian -= gata * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗛𝗢𝗥𝗔(𝗦)*\n*${gata} ${rpgshop.emoticon('joincount')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('joincount')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('joincount')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.joincount -= gata * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗛𝗢𝗥𝗔(𝗦)*\n*${gata} ${rpgshop.emoticon('diamond')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('diamond')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 *${rpgshopp.emoticon('diamond')}** 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗧𝗜𝗘𝗠𝗣𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗧𝗜𝗠𝗘 𝗡𝗨𝗠𝗕𝗘𝗥*\n\n*1 = ${tiempoDecretado} 𝗗𝗜𝗔(𝗦)*\n*${gata} ${rpgshop.emoticon('gold')}*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗖𝗘𝗣𝗧𝗔𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗖𝗖𝗘𝗣𝗧𝗘𝗗*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata) return conn.reply(m.chat, `${ag}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘𝗦* *${rpgshop.emoticon('gold')}* *𝗣𝗔𝗥𝗔 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗣𝗥𝗘 ${rpgshopp.emoticon('gold')}* 𝗘𝗡 𝗟𝗔 𝗧𝗜𝗘𝗡𝗗𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}buy* *𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗩𝗘𝗡𝗗𝗘𝗥 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗚𝗔𝗡𝗔𝗡𝗖𝗜𝗔𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}sell*`, fkontak, m)
user.gold -= gata * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗨𝗦𝗧𝗘𝗗 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃👤 𝗡𝗢𝗠𝗕𝗥𝗘 : 𝗨𝗦𝗘𝗥 » ${user.name}*
*┃💰 𝗣𝗔𝗚𝗢 : 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝗧𝗘𝗡𝗜𝗔 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝗧𝗜𝗘𝗡𝗘 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝗧𝗜𝗘𝗠𝗣𝗢 : 𝗧𝗜𝗠𝗘 » ${tiempoPremium} min*
*┃📉 𝗧𝗜𝗠𝗘𝗥 » ${user.premiumTime - now} seg*
*╰━━━━━━━━━━━━━━━━━━━━*\n_Ahora tiene Premium por lo tanto no va tener límites._\n_Now you have Premium so there will be no limits._`, fkontak, { mentions: [aa,] })}
	
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
await conn.reply(m.chat, `${htki} *𝗣𝗥𝗘𝗠𝗜𝗨𝗠* ${htka}\n\n🛒 *𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*\n\n🛒 *𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵*\n*✪ ${usedPrefix}prem1 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 : 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀*\n*✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶*\n*✪ ${usedPrefix}prem2 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 : 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀*\n*✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷*\n*✪ ${usedPrefix}prem3 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 : 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀*\n*✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸*\n*✪ ${usedPrefix}prem4 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 : 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀*\n*✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹*\n*✪ ${usedPrefix}prem5 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 : 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀*\n*✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺*\n*✪ ${usedPrefix}prem6 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 : 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀*\n*✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻*\n*✪ ${usedPrefix}prem7 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 : 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀*\n*✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼*\n*✪ ${usedPrefix}prem8 1*\n*✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 : 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀*\n*✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n${wm}`, fkontak, { mentions: [aa,] })
/*const sections = [{
title: comienzo + ' 🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 🎟️ ' + fin,
rows: [
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵", rowId: `${usedPrefix}prem1 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 : 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀\n✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶", rowId: `${usedPrefix}prem2 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 : 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷", rowId: `${usedPrefix}prem3 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 : 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸", rowId: `${usedPrefix}prem4 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 : 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀\n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹", rowId: `${usedPrefix}prem5 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 : 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺", rowId: `${usedPrefix}prem6 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 : 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻", rowId: `${usedPrefix}prem7 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 : 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼", rowId: `${usedPrefix}prem8 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 : 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀\n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`}
]},{
title: comienzo + ' 🌟 𝙄𝙉𝙁𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🌟 ' + fin,
rows: [
{title: "🎟️ 𝗨 𝗦 𝗨 𝗔 𝗥 𝗜 𝗢 𝗦   𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + 'listprem'},
{title: "🏆 𝗧 𝗢 𝗣   𝗠 𝗨 𝗡 𝗗 𝗜 𝗔 𝗟", rowId: usedPrefix + 'top'},
{title: "🚀 𝗗 𝗜 𝗦 𝗙 𝗥 𝗨 𝗧 𝗔 𝗥   𝗣 𝗥𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `🌟 𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!!!\n\n𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥!!!`,
  footer: global.wm,
  title: `${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}`,
  buttonText: `🎟️ 𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})*/
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i
handler.register = true

export default handler
