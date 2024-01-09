let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}
let pesan = args.join` `
let oi = `𝗠𝗘𝗡𝗦𝗔𝗝𝗘:* ${pesan}`
let teks = `*╭「 𝗔𝗬𝗨𝗗𝗔 | 𝗛𝗘𝗟𝗣 」*\n*┃ ${oi}\n`
for (let mem of participants) {
teks += `*┃ @${mem.id.split('@')[0]}*\n`}
teks += `*╰━━━━[ ${vs} ]━━━━*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(pedirayuda)$/i
handler.group = true
export default handler
