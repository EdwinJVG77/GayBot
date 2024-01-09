let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗣𝗔𝗥𝗔 𝗤𝗨𝗘 𝗘𝗟 𝗧𝗘𝗫𝗧𝗢 𝗦𝗘 𝗖𝗢𝗡𝗩𝗜𝗘𝗥𝗧𝗔 𝗘𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢*\n*${usedPrefix + command} Nuevo Sticker*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗦𝗢 𝗧𝗛𝗘 𝗧𝗘𝗫𝗧 𝗕𝗘𝗖𝗢𝗠𝗘𝗦 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘*\n*${usedPrefix + command} New Sticker*`
let teks = encodeURI(text)

if (command == 'attp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'attp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m)}

if (command == 'ttp5') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp4') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp3') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
}
handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2']
handler.tags = ['sticker']
export default handler
