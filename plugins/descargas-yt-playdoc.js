import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args || !args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗧𝗜𝗧𝗨𝗟𝗢/𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗢 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗔𝗨𝗗𝗜𝗢 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
try {
const yt_play = await search(args.join(' '))
let additionalText = ''
if (command === 'play3' || command == 'playaudiodoc') {
additionalText = 'audio'
} else if (command === 'play4' || command == 'playvideodoc') {
additionalText = 'video'
}
const texto1 = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*
*┃  ${yt_play[0].title}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗨𝗕𝗟𝗜𝗖𝗔𝗗𝗢 | 𝗣𝗨𝗕𝗟𝗜𝗦𝗛𝗘𝗗*
*┃  ${yt_play[0].ago}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 | 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡*
*┃  ${secondString(yt_play[0].duration.seconds)}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗩𝗜𝗦𝗧𝗔𝗦 | 𝗩𝗜𝗘𝗪𝗦*
*┃  ${MilesNumber(yt_play[0].views)}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗔𝗨𝗧𝗢𝗥 | 𝗔𝗨𝗧𝗛𝗢𝗥*
*┃  ${yt_play[0].author.name}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞*
*┃  ${yt_play[0].url}*
*╰━━━━━━━━━━━━━━━━━━━━*

  _Enviando ${additionalText}, aguarde un momento..._`.trim()
await conn.sendMessage(m.chat, {
text: texto1,
contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: packname,
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })
if (command == 'play3' || command == 'playaudiodoc') {
try {
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
let cap = `*╭━━━━━━━━━━━━━━━━*\n┃📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥\n*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*\n*┃ ${ttl}*\n*┃━━━━━━━━━━━━━━━━*\n*┃𝗣𝗘𝗦𝗢 | 𝗦𝗜𝗭𝗘:*\n*┃ ${size}*\n*╰━━━━━━━━━━━━━━━━*`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
//await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, { document: { url: lolh.result.link }, caption: `*╭━━━━━━━━━━━━━━━━*\n*┃ 📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥*\n*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*\n*┃ ${n}*\n*╰━━━━━━━━━━━━━━━━*`, fileName: `${n}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: n, 
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   

} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
await conn.sendMessage(m.chat, { document: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: __res[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   

} catch {
}}}}
if (command == 'play4' || command == 'playvideodoc') {
try {
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `*╭━━━━━━━━━━━━━━━━*\n┃📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥\n*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*\n*┃ ${ttl}*\n*┃━━━━━━━━━━━━━━━━*\n*┃𝗣𝗘𝗦𝗢 | 𝗦𝗜𝗭𝗘:*\n*┃ ${size}*\n*╰━━━━━━[ ${vs} ]━━━━━━━*`, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   

} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭━━━━━━━━━━━━━━━━*\n┃📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥\n*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*\n*┃ ${ttl}*\n*┃━━━━━━━━━━━━━━━━*\n*┃𝗣𝗘𝗦𝗢 | 𝗦𝗜𝗭𝗘:*\n*┃ ${size}*\n*╰━━━━━━━━━━━━━━━━*`, thumbnail: await fetch(n4)}, {quoted: m});
} catch {
}}}}
} catch {
  await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥, 𝗡𝗢 𝗙𝗨𝗘 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢/𝗔𝗨𝗗𝗜𝗢, 𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥𝗟𝗢*`, fkontak, m) 
handler.limit = 0
}}
handler.help = ['play3', 'play4'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playaudiodoc|playdoc|playdoc2|play3|play4|playvideodoc)$/i;
handler.limit = 2
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
const {contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes};
}}
const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, result2: resultFix, thumb});
}).catch(reject);
})}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
const {qualityLabel, contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes};
}}
const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
}).catch(reject);
})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getAudio = await ytMp3(random);
resolve(getAudio);
}).catch(reject);
})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getVideo = await ytMp4(random);
resolve(getVideo);
}).catch(reject);
})}