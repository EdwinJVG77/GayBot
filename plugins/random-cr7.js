import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/cr7.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `*𝗦𝗜𝗨𝗨𝗨𝗨*`, m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|cr7|elbicho)$/i
handler.limit = false
export default handler
