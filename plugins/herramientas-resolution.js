//By https://github.com/DIEGO-OFC

import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*`

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗘𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡 | 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡:*
*┃ ${width} x ${height}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗔𝗡𝗖𝗛𝗢 | 𝗪𝗜𝗗𝗘:*
*┃ ${width}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗔𝗟𝗧𝗨𝗥𝗔 | 𝗛𝗘𝗜𝗚𝗛𝗧:*
*┃ ${height}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ ${link}*
*╰━━━━━━━━━━━━━━━━━━━━*`)
}
handler.help = ['cekresolution <reply | caption>', 'cekreso <reply | caption>']
handler.tags = ['tool']
handler.command = /^resolucion|resolution$/i

export default handler
