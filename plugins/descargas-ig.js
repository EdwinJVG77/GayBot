import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn, args, command, usedPrefix}) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        }, 
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }, 
        "participant": "0@s.whatsapp.net"
    }
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗦𝗨 𝗩𝗜𝗗𝗘𝗢 𝗢 𝗜𝗠𝗔𝗚𝗘𝗡*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://www.instagram.com/tv/Cd8U99IloVA/?igshid=YmMyMTA2M2Y=*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗬𝗢𝗨𝗥 𝗩𝗜𝗗𝗘𝗢 𝗢𝗥 𝗜𝗠𝗔𝗚𝗘*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
try {
const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
const responsel = await axios.get(apiUrll);
const resultl = responsel.data;
for (const item of resultl.message) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
let tXXxt = `${eg}`.trim()  
conn.sendFile(m.chat, item._url, null, tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {    
try {
const datTa = await instagram.v1(args[0]);
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const tXXxt = `${eg}`.trim();
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0];
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt2 = `${eg}`.trim();
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
} catch {
try {
const resultssss = await instagramdl(args[0]);
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt4 = `${eg}`.trim();
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt1 = `${eg}`.trim();
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
} catch {
console.log('Error en el intento 4, sin resultados')  
conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥𝗟𝗢*`, edit: key});
handler.limit = 0
}}}}}}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70
handler.register = false
export default handler
