import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡 𝗩𝗜𝗗𝗘𝗢 𝗢 𝗔𝗨𝗗𝗜𝗢 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗔 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭*\n\n*𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗡 𝗩𝗜𝗗𝗘𝗢 𝗢𝗥 𝗔𝗨𝗗𝗜𝗢 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗧𝗢 𝗔 𝗩𝗢𝗜𝗖𝗘 𝗡𝗢𝗧𝗘*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗔𝗨𝗗𝗜𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗔𝗨𝗗𝗜𝗢, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢 𝗔 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗖𝗢𝗨𝗟𝗗 𝗡𝗢𝗧 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗙𝗥𝗢𝗠 𝗔𝗨𝗗𝗜𝗢 𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗠𝗢, 𝗣𝗟𝗘𝗔𝗦𝗘 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡*`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗗𝗘 𝗩𝗜𝗗𝗘𝗢 𝗔 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗖𝗢𝗨𝗟𝗗 𝗡𝗢𝗧 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗙𝗥𝗢𝗠 𝗩𝗜𝗗𝗘𝗢 𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗠𝗢, 𝗣𝗟𝗘𝗔𝗦𝗘 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡*`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler
