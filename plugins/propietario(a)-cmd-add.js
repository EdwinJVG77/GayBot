let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗢 𝗜𝗠𝗔𝗚𝗘𝗡 𝗔𝗟 𝗖𝗨𝗔𝗟 𝗤𝗨𝗜𝗘𝗥𝗘 𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗨𝗡 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗢 𝗧𝗘𝗫𝗧𝗢*`
if (!m.quoted.fileSha256) throw `${lenguajeGB['smsAvisoMG']()}*𝗦𝗢𝗟𝗢 𝗣𝗨𝗘𝗗𝗘𝗦 𝗔𝗦𝗜𝗚𝗡𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗢 𝗧𝗘𝗫𝗧𝗢𝗦 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗘 𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦*`
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗨𝗦𝗘 𝗗𝗘 𝗘𝗦𝗧𝗔 𝗠𝗔𝗡𝗘𝗥𝗔:*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗞𝗘 𝗧𝗛𝗜𝗦:*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} <#menu> <respond to sticker or image>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw `${lenguajeGB['smsAvisoAG']()}*𝗦𝗢𝗟𝗢 𝗠𝗜 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗨𝗘𝗗𝗘 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗘𝗦𝗧𝗔 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡*`
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗘𝗟 𝗧𝗘𝗫𝗧𝗢/𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗔𝗦𝗜𝗚𝗡𝗔𝗗𝗢 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗢 𝗜𝗠𝗔𝗚𝗘𝗡 𝗙𝗨𝗘 𝗔𝗚𝗥𝗘𝗚𝗔𝗗𝗢 𝗔 𝗟𝗔 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔𝗠𝗘𝗡𝗧𝗘*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
