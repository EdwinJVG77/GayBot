let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${lenguajeGB['smsAvisoMG']()}*╭━━━━━━━━━━━━━━━━*
*┃ ${usedPrefix + command} abrir*
*┃ ${usedPrefix + command} cerrar*
*╰━━━━━━━━━━━━━━━━*`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗬𝗔 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥 𝗧𝗢𝗗𝗢𝗦 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢`, `𝗚𝗥𝗨𝗣𝗢 𝗔𝗕𝗜𝗘𝗥𝗧𝗢`, pp, [['𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗢𝗙𝗜𝗖𝗜𝗔𝗟𝗘𝗦 | 𝗔𝗖𝗖𝗢𝗨𝗡𝗧𝗦 ✅', `.cuentasgb`], ['𝗩𝗢𝗟𝗩𝗘𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 ́ | 𝗕𝗔𝗖𝗞 𝗧𝗢 𝗠𝗘𝗡𝗨 ', `/menu`]], m)
}
  
if (isClose === 'announcement'){

conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗦𝗢𝗟𝗢 𝗟𝗢𝗦 𝗔𝗗𝗠𝗜𝗡𝗦 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢*`, `*𝗚𝗥𝗨𝗣𝗢 𝗖𝗘𝗥𝗥𝗔𝗗𝗢*`, pp, [['𝗠𝗢𝗠𝗘𝗡𝗧𝗢 𝗔𝗗𝗠𝗜𝗡 🏳️‍🌈', '.s'], ['𝗩𝗢𝗟𝗩𝗘𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 | 𝗕𝗔𝗖𝗞 𝗧𝗢 𝗠𝗘𝗡𝗨', `/menu`]], m)
}  
 }
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
