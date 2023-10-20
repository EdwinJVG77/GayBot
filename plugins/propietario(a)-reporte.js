let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗥𝗘𝗣𝗢𝗥𝗧𝗘*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.*`
if (text.length < 10) throw `${lenguajeGB['smsAvisoFG']()}*𝗠𝗜𝗡𝗜𝗠𝗢 10 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗘𝗦 𝗣𝗔𝗥𝗔 𝗛𝗔𝗖𝗘𝗥 𝗘𝗟 𝗥𝗘𝗣𝗢𝗥𝗧𝗘.*\n\n*𝗠𝗜𝗡𝗜𝗠𝗨𝗠 10 𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗦 𝗧𝗢 𝗠𝗔𝗞𝗘 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢𝗥𝗧.*`
if (text.length > 1000) throw `${lenguajeGB['smsAvisoFG']()}*𝗠𝗔𝗫𝗜𝗠𝗢 1000 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗘𝗦 𝗣𝗔𝗥𝗔 𝗛𝗔𝗖𝗘𝗥 𝗘𝗟 𝗥𝗘𝗣𝗢𝗥𝗧𝗘.*\n\n*𝗠𝗔𝗫𝗜𝗠𝗨𝗠 1000 𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗦 𝗧𝗢 𝗠𝗔𝗞𝗘 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢𝗥𝗧.*`
let teks = `*╭━━[ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 | 𝗥𝗘𝗣𝗢𝗥𝗧 ]━━*\n*┃*\n*┃* *𝗡𝗨𝗠𝗘𝗥𝗢 | 𝗡𝗨𝗠𝗕𝗘𝗥:*\n┃  Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝗠𝗘𝗡𝗦𝗔𝗝𝗘 | 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:*\n*┃*  ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━*`
conn.reply('573005094862@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`${lenguajeGB['smsAvisoEG']()}*El reporte ha sido enviado a mi creador. Tendrá una respuesta pronto. De ser falso será Ignorado el reporte.*\n\n*The report has been sent to my creator. You will have an answer soon. If false, the report will be ignored.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
