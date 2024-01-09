let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗟𝗔𝗦 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔𝗦*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} edwinjvg_*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗦𝗧𝗢𝗥𝗜𝗘𝗦*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} edwinjvg_*`
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗜𝗡𝗩𝗔𝗟𝗜𝗗𝗢 𝗢 𝗦𝗜𝗡 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔𝗦*`)  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type']
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗜𝗡𝗩𝗔𝗟𝗜𝗗𝗢 𝗢 𝗦𝗜𝗡 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔𝗦*`)})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗜𝗡𝗩𝗔𝗟𝗜𝗗𝗢 𝗢 𝗦𝗜𝗡 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔𝗦*`)})
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 1
handler.exp = 87
export default handler