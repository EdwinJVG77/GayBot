import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!teks) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗡𝗔 𝗖𝗔𝗡𝗖𝗜𝗢𝗡 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗟𝗔 𝗟𝗘𝗧𝗥𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Ayer*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗙 𝗔 𝗦𝗢𝗡𝗚 𝗧𝗢 𝗚𝗘𝗧 𝗧𝗛𝗘 𝗟𝗬𝗥𝗜𝗖𝗦*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Duality*`
try {
const result = await getTracks(teks);
const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
const json = await res.json();
let img;
try {
img = result.album.artwork;
} catch {
try {
img = json.thumbnail.genius;
} catch {
const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
img = await bochil.getRandom();
}}
await conn.sendMessage(m.chat, {image: {url: img}, caption: `
*╭━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*
*┃ ${result[0].title || ''}* 
*┃━━━━━━━━━━━━━━━━*
*┃ 𝗔𝗨𝗧𝗢𝗥(𝗔) | 𝗔𝗨𝗧𝗛𝗢𝗥:*
*┃ ${result[0].artist || ''}* 
*╰━━━━━━━━━━━━━━━━*
*Letra:* ${lyrics || ''}`}, {quoted: fkontak});
await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.exp = 55
export default handler