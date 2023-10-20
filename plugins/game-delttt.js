//import MessageType from '@adiwajshing/baileys'
let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn, usedPrefix, command }) => {
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

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗘𝗦𝗧𝗔𝗦 𝗘𝗡 𝗡𝗜𝗡𝗚𝗨𝗡𝗔 𝗣𝗔𝗥𝗧𝗜𝗗𝗔 𝗗𝗘 𝗧𝗥𝗘𝗦 𝗘𝗡 𝗥𝗔𝗬𝗔*\n\n*𝗜𝗡𝗜𝗖𝗜𝗔𝗥 𝗣𝗔𝗥𝗧𝗜𝗗𝗔: (${usedPrefix}ttt sala nueva)*`, fkontak, m)

delete conn.game[room.id]

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗟𝗔 𝗦𝗔𝗟𝗔 𝗗𝗘 𝗧𝗥𝗘𝗦 𝗘𝗡 𝗥𝗔𝗬𝗔 𝗙𝗨𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗔*`, fkontak, m)}

handler.command = /^(delgato|delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
handler.exp = 50
export default handler
