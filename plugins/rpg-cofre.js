let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 86400000 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `*𝗬𝗔 𝗥𝗘𝗖𝗟𝗔𝗠𝗔𝗦𝗧𝗘 𝗧𝗨 𝗖𝗢𝗙𝗥𝗘* ⚗️\n*𝗩𝗨𝗘𝗟𝗩𝗘 𝗘𝗡 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔 𝗥𝗘𝗖𝗟𝗔𝗠𝗔𝗥*\n\n*𝗬𝗢𝗨 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗖𝗟𝗔𝗜𝗠𝗘𝗗 𝗬𝗢𝗨𝗥 𝗖𝗢𝗙𝗙𝗘𝗥* ⚗️\n*𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 𝗜𝗡 ${msToTime(time - new Date())} 𝗧𝗢 𝗖𝗟𝗔𝗜𝗠 𝗔𝗚𝗔𝗜𝗡*`

let img = 'https://img.freepik.com/vector-gratis/cofre-monedas-oro-piedras-preciosas-cristales-trofeo_107791-7769.jpg?w=2000'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let gay = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += gay
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
*╭━━━━━━━━━━━━━━*
*┃ ¡𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦 𝗨𝗡 𝗖𝗢𝗙𝗥𝗘!* ⚗️
*┃ 𝗬𝗢𝗨 𝗚𝗘𝗧 𝗔 𝗖𝗢𝗙𝗙𝗘𝗥!* ⚗️
*┃━━━━━━━━━━━━━━*
*┃⚗️ ${dia} 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘(𝗦)* 💎
*┃⚗️ ${tok} 𝗧𝗢𝗞𝗘𝗡(𝗦)* 🪙
*┃⚗️ ${gay} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡(𝗦)* 🏳️‍🌈
*┃⚗️ ${expp} 𝗘𝗫𝗣* ⚡
*╰━━━━━━━━━━━━━━*`

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

await conn.sendFile(m.chat, img, 'gay.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'] 
handler.level = false
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " 𝗛𝗢𝗥𝗔(𝗦) " + minutes + " 𝗠𝗜𝗡𝗨𝗧𝗢(𝗦)"
}
