import fetch from 'node-fetch'
import axios from 'axios'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, '*𝗧𝗢𝗗𝗔𝗩𝗜𝗔 𝗛𝗔𝗬 𝗖𝗔𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗦𝗜𝗡 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧.*\n', conn.tebaklagu[id][0])
throw false
} //5LTV57azwaid7dXfz5fzJu
let res = await fetchJson(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/tebaklagu.json`)
let json = res[Math.floor(Math.random() * res.length)]    
let caption = `
*𝗔𝗗𝗜𝗩𝗜𝗡𝗔 𝗘𝗟 𝗧𝗜𝗧𝗨𝗟𝗢 𝗗𝗘 𝗟𝗔 𝗖𝗔𝗡𝗖𝗜𝗢𝗡*
*𝗧𝗜𝗘𝗠𝗣𝗢:* *${(timeout / 1000).toFixed(2)}* *𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*
*𝗘𝗦𝗖𝗥𝗜𝗕𝗘:* *${usedPrefix}pista* *𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗨𝗡𝗔 𝗣𝗜𝗦𝗧𝗔*
*𝗣𝗥𝗘𝗠𝗜𝗢:* *${poin}* *𝗫𝗣*
*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗖𝗢𝗡 𝗟𝗔 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔!*`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `*¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!*\n\n*𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔:* ${json.jawaban}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
