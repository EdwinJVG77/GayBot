import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗔𝗨𝗗𝗜𝗢*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://youtu.be/dQw4w9WgXcQ*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗔𝗨𝗗𝗜𝗢*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} https://youtu.be/dQw4w9WgXcQ*`, fkontak, m)

let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗣𝗔𝗥𝗔 𝗘𝗦𝗘 𝗡𝗨𝗠𝗘𝗥𝗢, 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗡𝗨𝗠𝗘𝗥𝗢 𝗘𝗡𝗧𝗥𝗘 𝗘𝗟 1 𝗬 𝗘𝗟 ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()}*𝗣𝗔𝗥𝗔 𝗣𝗢𝗗𝗘𝗥 𝗨𝗦𝗔𝗥 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗗𝗘 𝗘𝗦𝗧𝗔 𝗙𝗢𝗥𝗠𝗔 (${usedPrefix + command} <número>), 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗟𝗔 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗗𝗘 𝗩𝗜𝗗𝗘𝗢𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}ytsearch <texto>*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()}*𝗣𝗔𝗥𝗔 𝗣𝗢𝗗𝗘𝗥 𝗨𝗦𝗔𝗥 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗗𝗘 𝗘𝗦𝗧𝗔 𝗙𝗢𝗥𝗠𝗔 (${usedPrefix + command} <número>), 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗟𝗔 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗗𝗘 𝗩𝗜𝗗𝗘𝗢𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}ytsearch <texto>*`;
}}}  
  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗦𝗘 𝗘𝗦𝗧𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗦𝗨 𝗔𝗨𝗗𝗜𝗢, 𝗘𝗦𝗣𝗘𝗥𝗘 𝗨𝗡 𝗠𝗢𝗠𝗘𝗡𝗧𝗢 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗬𝗢𝗨𝗥 𝗔𝗨𝗗𝗜𝗢 𝗜𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚, 𝗪𝗔𝗜𝗧 𝗔 𝗠𝗢𝗠𝗘𝗡𝗧 𝗣𝗟𝗘𝗔𝗦𝗘*`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝗘𝗦 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗤𝗨𝗘 𝗘𝗟 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 𝗦𝗘𝗔 𝗠𝗨𝗬 𝗣𝗘𝗦𝗔𝗗𝗢. 𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗖𝗢𝗡 𝗢𝗧𝗥𝗔 𝗢𝗣𝗖𝗜𝗢𝗡 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔*\n\n*𝗜𝗧 𝗜𝗦 𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘 𝗧𝗛𝗔𝗧 𝗧𝗛𝗘 𝗙𝗜𝗟𝗘 𝗜𝗦 𝗩𝗘𝗥𝗬 𝗛𝗘𝗔𝗩𝗬. 𝗧𝗥𝗬 𝗔𝗡𝗢𝗧𝗛𝗘𝗥*`, m)}
}}}
handler.command = /^fgmp3|dlmp3|getaud|yta|audio$/i
export default handler
