import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/johnpork.js`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `🐽`, m)}
handler.help = ['johnpork', 'jp']
handler.tags = ['internet']
handler.command = /^(johnpork|jpork|jp)$/i
handler.limit = false
export default handler
