import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝗚𝗮𝘆𝗕𝗼𝘁 🤖', body: '𝗘𝗱𝘄𝗶𝗻', sourceUrl: `https://github.com/EdwinJVG77/GayBot`, thumbnail: imagen1}}})}
    
return !0 }
export default handler
