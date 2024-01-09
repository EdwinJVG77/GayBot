import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
conn.sendFile(m.chat, pp, 'error.jpg', m)}
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
 conn.sendFile(m.chat, pp, 'error.jpg', m)}

if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗣𝗔𝗜𝗦 𝗬 𝗖𝗜𝗨𝗗𝗔𝗗 𝗣𝗔𝗥𝗔 𝗦𝗔𝗕𝗘𝗥 𝗘𝗟 𝗖𝗟𝗜𝗠𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Colombia Bogotá*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗖𝗢𝗨𝗡𝗧𝗥𝗬 𝗔𝗡𝗗 𝗖𝗜𝗧𝗬 𝗧𝗢 𝗞𝗡𝗢𝗪 𝗧𝗛𝗘 𝗪𝗘𝗔𝗧𝗛𝗘𝗥*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Francia París*`, m)  

let pp = `https://es.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ *AQUÍ TIENE EL CLIMA EN ESPAÑOL*`, m)}
  
if (command == 'clima2') {
 if (!text) return conn.reply(m.chat, `${mg}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗣𝗔𝗜𝗦 𝗬 𝗖𝗜𝗨𝗗𝗔𝗗 𝗣𝗔𝗥𝗔 𝗦𝗔𝗕𝗘𝗥 𝗘𝗟 𝗖𝗟𝗜𝗠𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Colombia Bogotá*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗖𝗢𝗨𝗡𝗧𝗥𝗬 𝗔𝗡𝗗 𝗖𝗜𝗧𝗬 𝗧𝗢 𝗞𝗡𝗢𝗪 𝗧𝗛𝗘 𝗪𝗘𝗔𝗧𝗛𝗘𝗥*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Francia París*`, m)  

let pp = `https://en.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ *HERE IS THE WEATHER IN ENGLISH*`, m)}
  
if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗣𝗔𝗜𝗦 𝗬 𝗖𝗜𝗨𝗗𝗔𝗗 𝗣𝗔𝗥𝗔 𝗦𝗔𝗕𝗘𝗥 𝗘𝗟 𝗖𝗟𝗜𝗠𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Colombia Bogotá*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗖𝗢𝗨𝗡𝗧𝗥𝗬 𝗔𝗡𝗗 𝗖𝗜𝗧𝗬 𝗧𝗢 𝗞𝗡𝗢𝗪 𝗧𝗛𝗘 𝗪𝗘𝗔𝗧𝗛𝗘𝗥*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Francia París*`, m)  

let pp = `https://pt.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, m)}
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.limit = 1
export default handler

