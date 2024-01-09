let handler = async (m, { conn, text }) => {
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢*\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗧𝗘𝗫𝗧*`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `*╰ ✅ 𝗘𝗫𝗜𝗧𝗢 | 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ✅╮*`, m)
} catch {
       throw '*╰❌ 𝗙𝗔𝗟𝗟𝗢 | 𝗘𝗥𝗥𝗢𝗥 ❌╮*'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
