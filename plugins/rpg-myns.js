import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await m.reply(`⬇️ *𝗘𝗦𝗘 𝗘𝗦 𝗦𝗨 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗦𝗘𝗥𝗜𝗘* ⬇️`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
