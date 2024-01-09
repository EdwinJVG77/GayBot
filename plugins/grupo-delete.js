let handler = async (m, { conn, command }) => {
if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥*\n*𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗧𝗛𝗘 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗧𝗢 𝗗𝗘𝗟𝗘𝗧𝗘*`
try {
let gada = m.message.extendedTextMessage.contextInfo.participant
let mana = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: mana, participant: gada }})}
 catch {
  return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}

handler.tags = ['misc']
handler.help = ['del', 'delete']
handler.command = /^del(ete)?$/i

export default handler
