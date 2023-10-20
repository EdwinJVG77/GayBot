 //BY: VIRUZZ-OFC

let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let time = global.db.data.users[m.sender].wait + 40000
let textos = `\`\`\`CARA O CRUZ\n\nPUEDES ELEGIR LA OPCION USANDO LOS COMANDOS\n\n${usedPrefix + command} cara\n${usedPrefix + command} cruz\`\`\``
if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 𝗘𝗦𝗣𝗘𝗥𝗔 ${Math.floor((time - new Date()) / 1000)} 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦 𝗔𝗡𝗧𝗘𝗦 𝗗𝗘 𝗣𝗢𝗗𝗘𝗥 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔 𝗝𝗨𝗚𝗔𝗥*\n\n*𝗪𝗔𝗜𝗧 ${Math.floor((time - new Date()) / 1000)} 𝗦𝗘𝗖𝗢𝗡𝗗𝗦 𝗕𝗘𝗙𝗢𝗥𝗘 𝗬𝗢𝗨 𝗖𝗔𝗡 𝗣𝗟𝗔𝗬 𝗔𝗚𝗔𝗜𝗡*`, fkontak, m)
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
//conn.sendHydrated(m.chat, '*Cara o Cruz*\n\nPuedes eleguir la opción con los botones o usa los comandos:\n.suerte cruz\n.suerte cara\n\n usar en minúsculas',wm, pp, null, null, null, null, [['Cara', `${usedPrefix + command} cara`],['Cruz', `${usedPrefix + command} cruz`]], m)
var astro = Math.random()
if (astro < 0.50) {//34
    astro = 'cara'
} else if (astro > 0.50){//34
astro = 'cruz' 
}
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 2
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗚𝗔𝗡𝗔𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 2
m.reply(`╭━[ 🎖️𝗚𝗔𝗡𝗔𝗦𝗧𝗘 🎖️ ]━━\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n┃𝗚𝗮𝗻𝗮𝘀𝘁𝗲: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].money -= 300
//global.db.data.users[m.sender].exp -= 300
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].money += 3
//global.db.data.users[m.sender].exp += 1000
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗚𝗔𝗡𝗔𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗮𝘆𝗖𝗼𝗶𝘀 🏳️‍🌈\n*╰━━━━━━━━━━━━━━━━*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
}
}else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 100
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗚𝗔𝗡𝗔𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
}} else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 100
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗚𝗔𝗡𝗔𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who)  
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].money -= 400
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].money += 300
m.reply(`*╭━━━━━━━━━━━━━━━━*\n*┃ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}*\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗚𝗔𝗡𝗔𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].money -= 300
m.reply(`*╭━━━━━━━━━━━━━━━━*\n┃ 𝗡𝗼𝗺𝗯𝗿𝗲:${name}\n*┃ 𝗘𝗟𝗘𝗚𝗜𝗦𝗧𝗘: ${text}*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢: ${astro}*\n*┃ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘: ${[money0].getRandom()} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*\n*╰━━━━━━━━━━━━━━━━*`)
}
global.db.data.users[m.sender].wait = new Date * 1
}}
handler.help = ['suerte']
handler.tags = ['games']
handler.command = /^(suerte|cruzcara|caracruz)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}