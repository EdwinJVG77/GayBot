var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = imagen1	
const gay = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗚𝗜𝗧𝗛𝗨𝗕:*
*┃ ${md}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠:*
*┃ ${ig}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗞 𝗧𝗢𝗞:*
*┃ ${tt}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 - 𝗔𝗦𝗜𝗦𝗧𝗘𝗡𝗖𝗜𝗔:*
*┃ ${asistencia}*
*╰━━━━━━━━━━━━━━━━━━━━*`

await conn.sendFile(m.chat, pp, 'gay.mp4', gay, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(cuentasoficiales|cuentasgb|cuentagb|accounts|gayccounts|account|cuentasdegaybot|cuentasgaybot)$/i

export default handler