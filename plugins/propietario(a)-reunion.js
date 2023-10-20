let handler = async(m, { conn, command }) => {

let text = `*🥏 𝗘𝗟 𝗢𝗪𝗡𝗘𝗥 @${m.sender.split`@`[0]} 𝗛𝗔 𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗗𝗢 𝗦𝗨 𝗣𝗥𝗘𝗦𝗘𝗡𝗖𝗜𝗔 𝗘𝗡 𝗘𝗟 𝗦𝗧𝗔𝗙𝗙, 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗗𝗜𝗥𝗜𝗚𝗜𝗥𝗦𝗘 𝗟𝗢 𝗔𝗡𝗧𝗘𝗦 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗔𝗟 𝗦𝗧𝗔𝗙𝗙.*

*𝗦𝗧𝗔𝗙𝗙 𝗚𝗔𝗬𝗕𝗢𝗧 🏳️‍🌈*`
m.reply('*⚠️ 𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗔 𝗧𝗢𝗗𝗢𝗦 𝗟𝗢𝗦 𝗢𝗪𝗡𝗘𝗥𝗦 ⚠️*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
