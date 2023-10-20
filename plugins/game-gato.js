import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
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

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}*𝗧𝗢𝗗𝗔𝗩𝗜𝗔 𝗘𝗦𝗧𝗔 𝗝𝗨𝗚𝗔𝗡𝗗𝗢 𝗔𝗟𝗚𝗨𝗜𝗘𝗡, 𝗦𝗜 𝗗𝗘𝗦𝗘𝗔 𝗔𝗕𝗔𝗡𝗗𝗢𝗡𝗔𝗥 𝗟𝗔 𝗦𝗔𝗟𝗔 𝗘𝗦𝗖𝗥𝗜𝗕𝗔 salir*\n*𝗧𝗔𝗠𝗕𝗜𝗘𝗡 𝗣𝗨𝗘𝗗𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗟𝗔 𝗦𝗔𝗟𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}delttt*`
if (!text) throw `${lenguajeGB['smsAvisoFG']()}*𝗗𝗘𝗕𝗘 𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘 𝗔 𝗟𝗔 𝗦𝗔𝗟𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢*\n*${usedPrefix + command} Sala Gaybot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗦𝗘 𝗛𝗔 𝗨𝗡𝗜𝗗𝗢 𝗔 𝗟𝗔 𝗦𝗔𝗟𝗔 ${text}*\n*¡𝗬𝗔 𝗣𝗨𝗘𝗗𝗘𝗡 𝗝𝗨𝗚𝗔𝗥!* 😼`, fkontak, m)

await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *𝗖𝗹𝗮́𝘀𝗶𝗰𝗼 𝗷𝘂𝗲𝗴𝗼 𝗴𝗮𝘁𝗼, 3 𝗲𝗻 𝗿𝗮𝘆𝗮 𝗼 𝘁𝗶𝗰𝘁𝗮𝗰𝘁𝗼𝗲* ❌\n\n*¿𝗖𝗼́𝗺𝗼 𝗷𝘂𝗴𝗮𝗿?*\n*𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝗮𝗹 𝗷𝘂𝗲𝗴𝗼 𝗰𝗼𝗻 𝘂𝗻 𝗻𝘂́𝗺𝗲𝗿𝗼, 𝗱𝗲𝗯𝗲 𝗲𝗹𝗲𝗴𝗶𝗿 𝘂𝗻𝗮 𝗽𝗼𝘀𝗶𝗰𝗶𝗼́𝗻 (1,2,3,4,5,6,7,8,9)*`, fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = ` 🐱 𝗚𝗮𝘁𝗼 🐱
👥 𝗝𝘂𝗴𝗮𝗱𝗼𝗿𝗲𝘀:
*━━━━━━━━━━*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*━━━━━━━━━━*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*━━━━━━━━━━*
𝗧𝘂𝗿𝗻𝗼 𝗱𝗲:
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `😼 *𝗝𝗨𝗘𝗚𝗢 𝗚𝗔𝗧𝗢* 😼

🙉 *𝗘𝗦𝗣𝗘𝗥𝗔𝗡𝗗𝗢 𝗔𝗟 𝗦𝗘𝗚𝗨𝗡𝗗𝗢 𝗝𝗨𝗚𝗔𝗗𝗢𝗥, 𝗣𝗨𝗘𝗗𝗘 𝗜𝗡𝗚𝗥𝗘𝗦𝗔𝗥 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix + command} ${text}*

🙉 *𝗦𝗜 𝗤𝗨𝗜𝗘𝗥𝗘 𝗔𝗕𝗔𝗡𝗗𝗢𝗡𝗔𝗥 𝗟𝗔 𝗦𝗔𝗟𝗔 𝗨𝗦𝗘 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}delttt*` }, { mentions: conn.parseMention(text), quoted: fkontak })

conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo|gato)$/i
handler.money = 100
export default handler
