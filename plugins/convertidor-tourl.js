/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡 𝗢 𝗩𝗜𝗗𝗘𝗢*\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘 𝗢𝗥 𝗩𝗜𝗗𝗘𝗢*`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ ${link}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗔𝗠𝗔Ñ𝗢 | 𝗦𝗜𝗭𝗘:*
*┃ ${media.length}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗫𝗣𝗜𝗥𝗔𝗖𝗜𝗢𝗡 | 𝗘𝗫𝗣𝗜𝗥𝗔𝗧𝗜𝗢𝗡:*
*┃ ${isTele ? '𝗡𝗢 𝗘𝗫𝗣𝗜𝗥𝗔' : '𝗗𝗘𝗦𝗖𝗢𝗡𝗢𝗖𝗜𝗗𝗢'}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗔𝗖𝗢𝗥𝗧𝗔𝗗𝗢 | 𝗦𝗛𝗢𝗥𝗧:*
*┃ ${await shortUrl(link)}*
*╰━━━━━━━━━━━━━━━━━━━━*`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
