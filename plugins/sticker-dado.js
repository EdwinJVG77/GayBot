let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗘𝗦𝗣𝗘𝗥𝗘, 𝗦𝗨 𝗗𝗔𝗗𝗢 𝗦𝗘 𝗘𝗦𝗧𝗔 𝗖𝗥𝗘𝗔𝗡𝗗𝗢*\n\n*𝗣𝗟𝗘𝗔𝗦𝗘 𝗪𝗔𝗜𝗧, 𝗬𝗢𝗨𝗥 𝗗𝗜𝗖𝗘 𝗜𝗦 𝗕𝗘𝗜𝗡𝗚 𝗖𝗥𝗘𝗔𝗧𝗘𝗗*`, fkontak, m)
conn.sendFile(m.chat, dir, 'error.webp', null, m, { asSticker: true })}
handler.command = ['dado', 'dados', 'dadu'] 
export default handler
