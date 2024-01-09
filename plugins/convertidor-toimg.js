import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗘𝗡 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗜𝗡𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg', 'img', 'jpg']
export default handler
