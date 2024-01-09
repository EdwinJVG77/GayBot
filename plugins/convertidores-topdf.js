import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*'    
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.command = /^topdf$/i
export default handler
