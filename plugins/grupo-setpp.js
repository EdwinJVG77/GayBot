let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗦𝗘 𝗖𝗔𝗠𝗕𝗜𝗢 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢 𝗟𝗔 𝗙𝗢𝗧𝗢 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢*`))
} else throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*`}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
