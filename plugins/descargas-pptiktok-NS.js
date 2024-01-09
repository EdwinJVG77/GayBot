import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗦𝗜𝗡 𝗨𝗦𝗔𝗥 𝗘𝗟 "@"*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} edwinjvg*\n\n*𝗧𝗬𝗣𝗘 𝗬𝗢𝗨𝗥 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗪𝗜𝗧𝗛𝗢𝗨𝗧 𝗨𝗦𝗜𝗡𝗚 "@"*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} camel84*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗙𝗢𝗧𝗢 𝗗𝗘 | 𝗣𝗜𝗖𝗧𝗨𝗥𝗘 𝗢𝗙:*\n*┃ ${text}* 👤\n*╰━━━━━━━━━━━━━━━━━━━━*`, m, false)
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(ttpp|ttfoto|ttphoto|tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
