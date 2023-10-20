let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `${lenguajeGB['smsAvisoMG']()}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗟𝗘 𝗣𝗨𝗘𝗗𝗘 𝗔𝗦𝗜𝗚𝗡𝗔𝗥 𝗧𝗘𝗫𝗧𝗢 𝗢 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗢 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗘𝗟 𝗖𝗢𝗗𝗜𝗚𝗢 𝗔𝗦𝗜𝗚𝗡𝗔𝗗𝗢 𝗨𝗦𝗘 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw `${lenguajeGB['smsAvisoAG']()}*𝗦𝗢𝗟𝗢 𝗠𝗜 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗨𝗘𝗗𝗘 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗘𝗦𝗧𝗔 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡*`
delete sticker[hash]
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗘𝗟 𝗧𝗘𝗫𝗧𝗢/𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗔𝗦𝗜𝗚𝗡𝗔𝗗𝗢 𝗔𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗢 𝗜𝗠𝗔𝗚𝗘𝗡 𝗙𝗨𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢 𝗗𝗘 𝗟𝗔 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔𝗠𝗘𝗡𝗧𝗘*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
