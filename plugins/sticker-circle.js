// Gracias a https://github.com/BrunoSobrino

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗖𝗨𝗘𝗥𝗗𝗘 𝗨𝗦𝗔𝗥 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix + command} 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗜𝗘𝗡𝗗𝗢 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗣𝗔𝗥𝗔 𝗛𝗔𝗖𝗘𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗜𝗥𝗖𝗨𝗟𝗔𝗥*\n\n*𝗥𝗘𝗠𝗘𝗠𝗕𝗘𝗥 𝗧𝗢 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ${usedPrefix + command} 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗜𝗡𝗚 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘, 𝗧𝗢 𝗠𝗔𝗞𝗘 𝗔 𝗖𝗜𝗥𝗖𝗨𝗟𝗔𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*`)
}}
handler.command = /^scircle|circle|círculo|circulo|scírculo|scirculo|sircle|redondo|circular$/i
export default handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
