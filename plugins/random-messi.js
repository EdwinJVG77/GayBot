import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*🐐🇦🇷*`, m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
handler.limit = false
export default handler
