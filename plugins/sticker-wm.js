import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔, 𝗔𝗚𝗥𝗘𝗚𝗨𝗘 𝗨𝗡 𝗣𝗔𝗤𝗨𝗘𝗧𝗘 𝗬 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗔𝗗𝗗 𝗣𝗔𝗖𝗞𝗔𝗚𝗘 𝗔𝗡𝗗 𝗔 𝗡𝗔𝗠𝗘*`
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔, 𝗔𝗚𝗥𝗘𝗚𝗨𝗘 𝗨𝗡 𝗣𝗔𝗤𝗨𝗘𝗧𝗘 𝗬 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗔𝗗𝗗 𝗣𝗔𝗖𝗞𝗔𝗚𝗘 𝗔𝗡𝗗 𝗔 𝗡𝗔𝗠𝗘*`
let img = await m.quoted.download()
if (!img) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔, 𝗔𝗚𝗥𝗘𝗚𝗨𝗘 𝗨𝗡 𝗣𝗔𝗤𝗨𝗘𝗧𝗘 𝗬 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗔𝗗𝗗 𝗣𝗔𝗖𝗞𝗔𝗚𝗘 𝗔𝗡𝗗 𝗔 𝗡𝗔𝗠𝗘*`
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ``, mediaType: 2, sourceUrl: nnt2, thumbnail: imagen1}}}, { quoted: m })
else throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗥𝗥𝗢𝗥, 𝗔𝗟𝗚𝗢 𝗦𝗔𝗟𝗜𝗢 𝗠𝗔𝗟, 𝗜𝗡𝗧𝗘𝗡𝗧𝗘𝗟𝗢 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢*\n\n*𝗘𝗥𝗥𝗢𝗥, 𝗦𝗢𝗠𝗘𝗧𝗛𝗜𝗡𝗚 𝗪𝗘𝗡𝗧 𝗪𝗥𝗢𝗡𝗚 𝗧𝗢 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡*`
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler