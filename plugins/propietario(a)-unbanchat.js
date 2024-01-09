//PARA GRUPOS
let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply(`${lenguajeGB['smsAvisoFG']()}*¡𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢 𝗘𝗡 𝗟𝗔 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦!*`)
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply(`${lenguajeGB['smsAvisoFG']()}*¡𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗕𝗔𝗡𝗘𝗔𝗗𝗢!*\n*𝗧𝗛𝗜𝗦 𝗖𝗛𝗔𝗧 𝗜𝗦 𝗡𝗢𝗧 𝗕𝗔𝗡𝗡𝗘𝗗!*`)
  chat.isBanned = false
  m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗥*\n*𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧 𝗙𝗨𝗘 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗗𝗢*\n*𝗔𝗛𝗢𝗥𝗔 𝗦𝗜 𝗘𝗦𝗧𝗢𝗬 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘. 🙉*\n\n*𝗧𝗛𝗜𝗦 𝗖𝗛𝗔𝗧 𝗪𝗔𝗦 𝗨𝗡𝗕𝗔𝗡*\n*𝗡𝗢𝗪 𝗜 𝗔𝗠 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘. 🙉*`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
