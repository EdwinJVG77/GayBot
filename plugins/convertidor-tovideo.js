import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗘𝗡 𝗩𝗜𝗗𝗘𝗢*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗧𝗢 𝗩𝗜𝗗𝗘𝗢*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗘𝗡 𝗩𝗜𝗗𝗘𝗢*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗧𝗢 𝗩𝗜𝗗𝗘𝗢*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', `${eg}`, m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo', 'tomp4']
export default handler
