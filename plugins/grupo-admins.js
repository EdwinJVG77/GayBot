let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗠𝗢𝗧𝗜𝗩𝗢 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗥 𝗟𝗔 𝗣𝗥𝗘𝗦𝗘𝗡𝗖𝗜𝗔 𝗗𝗘 𝗟𝗢𝗦 𝗔𝗗𝗠𝗜𝗡𝗦*`)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*┃➯ ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeGB.smsAddB5()} *${pesan}*`

let textoA = 
` *╭「 👥 𝗔𝗗𝗠𝗜𝗡𝗦 👥 」*  
*┃* ${lenguajeGB.smsAddB3()}
*┃* ${oi} 
*┃━━━━━━━━━━━━━━━*
`

let textoB =`${listAdmin}
*╰━━━━━━━━━━━━━━━*`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
