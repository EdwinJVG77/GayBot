import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*𝗗𝗘𝗕𝗘 𝗜𝗡𝗚𝗥𝗘𝗦𝗔𝗥 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMjkUnafY/*\n\n*𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗘𝗡𝗧𝗘𝗥 𝗔 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMjkUnafY/*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗘𝗦 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗢, 𝗣𝗥𝗢𝗖𝗨𝗥𝗘 𝗤𝗨𝗘 𝗘𝗦𝗧𝗘 𝗩𝗔𝗟𝗜𝗗𝗢*\n\n*𝗧𝗛𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗟𝗜𝗡𝗞 𝗜𝗦 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧, 𝗠𝗔𝗞𝗘 𝗦𝗨𝗥𝗘 𝗜𝗧 𝗜𝗦 𝗩𝗔𝗟𝗜𝗗*`, fkontak,  m)  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*𝗣𝗥𝗢𝗡𝗧𝗢 𝗧𝗘𝗡𝗗𝗥𝗔 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢 𝗗𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 😸*\n*𝗦𝗢𝗢𝗡 𝗪𝗜𝗟𝗟 𝗛𝗔𝗩𝗘 𝗧𝗛𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗩𝗜𝗗𝗘𝗢 😸*`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 | 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘*\n*┃ ${nickname}* 👤\n*┃* ${description ? '\n*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*\n*┃ ${description}*' : ''}\n*╰━━━━━━━━━━━━━━━━━━━━*`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 | 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘*\n*┃ ${nickname}* 👤\n*┃* ${description ? '\n*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*\n*┃ ${description}*' : ''}\n*╰━━━━━━━━━━━━━━━━━━━━*`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 | 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘*\n*┃ ${nickname}* 👤\n*┃* ${description ? '\n*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*\n*┃ ${description}*' : ''}\n*╰━━━━━━━━━━━━━━━━━━━━*`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 | 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘*\n*┃ ${nickname}* 👤\n*┃* ${description ? '\n*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*\n*┃ ${description}*' : ''}\n*╰━━━━━━━━━━━━━━━━━━━━*`.trim(), m)
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥 𝗔𝗟 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗧𝗜𝗞 𝗧𝗢𝗞, 𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥𝗟𝗢 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n*𝗘𝗥𝗥𝗢𝗥 𝗧𝗥𝗬𝗜𝗡𝗚 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗧𝗜𝗞 𝗧𝗢𝗞, 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗣𝗟𝗘𝗔𝗦𝗘*`, fkontak,  m) 
handler.limit = 0
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 2
export default handler

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return 'Enlace incorrecto';
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}
