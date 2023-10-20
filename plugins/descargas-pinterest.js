import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗨𝗦𝗘 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗠𝗔𝗡𝗘𝗥𝗔:*\n*${usedPrefix + command} Perro*\n\n*𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗞𝗘 𝗧𝗛𝗜𝗦:*\n*${usedPrefix + command} Dog*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 𝗗𝗘 | 𝗥𝗘𝗦𝗨𝗟𝗧 𝗢𝗙:*\n*┃ ${text}* 💕\n*╰━━━━━━━━━━━━━━━━━━━━*`.trim(), m)

}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pin|pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 500
handler.limit = 1
export default handler
