import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡 𝗩𝗜𝗗𝗘𝗢 𝗢 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗘𝗡 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3*\n\n*𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗡 𝗩𝗜𝗗𝗘𝗢 𝗢𝗥 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗠𝗢 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗜𝗡𝗧𝗢 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3*`
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗟𝗔 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗩𝗢𝗜𝗖𝗘 𝗡𝗢𝗧𝗘, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗦𝗨 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗩𝗢𝗭 𝗔 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗡𝗟𝗘 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗬𝗢𝗨𝗥 𝗡𝗢𝗧𝗘 𝗙𝗥𝗢𝗠 𝗩𝗢𝗜𝗖𝗘 𝗧𝗢 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗟𝗢𝗚𝗥𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗦𝗨 𝗩𝗜𝗗𝗘𝗢 𝗔 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗡𝗨𝗘𝗩𝗔𝗠𝗘𝗡𝗧𝗘 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗨𝗡𝗔𝗕𝗟𝗘 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗬𝗢𝗨𝗥 𝗩𝗜𝗗𝗘𝗢 𝗧𝗢 𝗔𝗨𝗗𝗜𝗢 𝗠𝗣3, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
