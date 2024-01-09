import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${lenguajeGB['smsAvisoFG']()}`
conn.sendFile(m.chat, json.url, 'error.jpg', `*乂 ⺀ ANIME - WAIFU ⺀ 乂*`, m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.limit = false
export default handler
