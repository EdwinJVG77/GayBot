let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} @tag*\n\n*𝗧𝗔𝗚 𝗦𝗢𝗠𝗘𝗢𝗡𝗘 𝗧𝗢 𝗨𝗡𝗕𝗔𝗡*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} @tag*\n\n*𝗧𝗔𝗚 𝗦𝗢𝗠𝗘𝗢𝗡𝗘 𝗧𝗢 𝗨𝗡𝗕𝗔𝗡*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗘𝗟/𝗟𝗔 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗙𝗨𝗘 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗗𝗢(𝗔)*\n*𝗣𝗢𝗗𝗥𝗔 𝗨𝗦𝗔𝗥 𝗔 𝗚𝗔𝗬𝗕𝗢𝗧 ✅*\n\n*𝗧𝗛𝗘 𝗨𝗦𝗘𝗥 𝗪𝗔𝗦 𝗨𝗡𝗕𝗔𝗡*\n*𝗨𝗦𝗘 𝗚𝗔𝗬𝗕𝗢𝗧 ✅*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
