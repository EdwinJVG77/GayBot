let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔 𝗟𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔 𝗤𝗨𝗘 𝗩𝗔 𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗗𝗘 𝗟𝗢𝗦 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗩𝗜𝗣 😿*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} @tag*\n\n*𝗧𝗔𝗚 𝗧𝗛𝗘 𝗣𝗘𝗥𝗦𝗢𝗡 𝗬𝗢𝗨 𝗪𝗜𝗟𝗟 𝗥𝗘𝗠𝗢𝗩𝗘 𝗙𝗥𝗢𝗠 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥𝗦 😿*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${lenguajeGB['smsAvisoFG']()}*𝗘𝗟/𝗟𝗔 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗡𝗢 𝗘𝗦 𝗩𝗜𝗣*\n*𝗧𝗛𝗘 𝗨𝗦𝗘𝗥𝗦 𝗜𝗦 𝗡𝗢𝗧 𝗣𝗥𝗘𝗠𝗜𝗨𝗠*`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*@${who.split`@`[0]} 𝗔𝗛𝗢𝗥𝗔 𝗘𝗟/𝗟𝗔 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗬𝗔 𝗡𝗢 𝗘𝗦 𝗩𝗜𝗣. 𝗧𝗘𝗡𝗗𝗥𝗔 𝗟𝗜𝗠𝗜𝗧𝗘𝗦 𝗖𝗢𝗡 ${gt} 😰*\n\n*@${who.split`@`[0]} 𝗡𝗢𝗪 𝗬𝗢𝗨 𝗔𝗥𝗘 𝗡𝗢 𝗟𝗢𝗡𝗚𝗘𝗥 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥. 𝗛𝗔𝗩𝗘 𝗟𝗜𝗠𝗜𝗧𝗦 😰*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler
