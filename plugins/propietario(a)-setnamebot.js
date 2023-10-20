let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢*\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗧𝗘𝗫𝗧*`
  try {
    await conn.updateProfileName(text)
    m.reply('*╰ ✅ 𝗘𝗫𝗜𝗧𝗢 | 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ✅╮*')
  } catch (e) {
    console.log(e)
    throw `*╰❌ 𝗙𝗔𝗟𝗟𝗢 | 𝗘𝗥𝗥𝗢𝗥 ❌╮*`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|setnamebot)$/i

handler.owner = true

export default handler