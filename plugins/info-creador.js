var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = imagen1	
const gay = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗚𝗔𝗬𝗕𝗢𝗧 🤖:*
*┃ wa.me/573012991267*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗖𝗘𝗡𝗧𝗘𝗥 𝗚𝗔𝗬𝗕𝗢𝗧:*
*┃ centergatabot@gmail.com*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗗𝗪𝗜𝗡 - 𝗔𝗦𝗜𝗦𝗧𝗘𝗡𝗖𝗜𝗔:*
*┃ ${asistencia}*
*╰━━━━━━━━━━━━━━━━━━━━*`

await conn.sendFile(m.chat, pp, 'gay.mp4', gay, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|creador)$/i

export default handler