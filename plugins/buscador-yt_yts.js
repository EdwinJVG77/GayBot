import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗡 𝗩𝗜𝗗𝗘𝗢 𝗢 𝗖𝗔𝗡𝗔𝗟 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗙 𝗔 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗩𝗜𝗗𝗘𝗢 𝗢𝗥 𝗖𝗛𝗔𝗡𝗡𝗘𝗟*`, fkontak,  m)
try {
let vids_ = { 
from: m.sender, 
urls: [] 
}
if (!global.videoList) {
global.videoList = [];
}
if (global.videoList[0]?.from == m.sender) {
delete global.videoList;
}
let results = await yts(text);
let textoInfo = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗨𝗘𝗗𝗘𝗦 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢*
*┃ 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗔𝗦 𝗗𝗘 𝗘𝗦𝗧𝗔 𝗙𝗢𝗥𝗠𝗔:*
*┃ ${usedPrefix}video <número>*
*┃ ${usedPrefix}audio <número>*
*┃━━━━━━━━━━━━━━━━━━━━* 
*┃ 𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*
*┃ ${usedPrefix}video 2*
*╰━━━━━━━━━━━━━━━━━━━━*`.trim()  
let teks = results.all.map((v, i) => {
let link = v.url;
vids_.urls.push(link);
return `[${i + 1}] 
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:* 
*┃ ${v.title}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ ${v.url}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 | 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* 
*┃ ${v.timestamp}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗨𝗕𝗜𝗗𝗢:* 
*┃ ${v.ago}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗩𝗜𝗦𝗧𝗔𝗦 | 𝗩𝗜𝗘𝗪𝗦:*
*┃ ${v.views}*
*╰━━━━━━━━━━━━━━━━━━━━*`}).join('\n\n')
conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, fkontak, m)
global.videoList.push(vids_);
} catch {    
}}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
export default handler