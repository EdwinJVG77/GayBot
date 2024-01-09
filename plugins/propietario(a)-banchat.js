//PARA GRUPOS
let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧 𝗙𝗨𝗘 𝗕𝗔𝗡𝗘𝗔𝗗𝗢 ✅*\n*𝗡𝗢 𝗘𝗦𝗧𝗔𝗥𝗘 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘 𝗛𝗔𝗦𝗧𝗔 𝗤𝗨𝗘 𝗦𝗘𝗔 𝗕𝗔𝗡𝗘𝗔𝗗𝗢.*\n\n*𝗧𝗛𝗜𝗦 𝗖𝗛𝗔𝗧 𝗪𝗔𝗦 𝗕𝗔𝗡𝗡𝗘𝗗 ✅*\n*𝗜 𝗪𝗜𝗟𝗟 𝗡𝗢𝗧 𝗕𝗘 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗨𝗡𝗧𝗜𝗟 𝗜𝗧 𝗜𝗦 𝗨𝗡𝗕𝗔𝗡𝗡𝗘𝗗*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|bangay|banchat2$/i
handler.botAdmin = true
handler.admin = true 
export default handler
