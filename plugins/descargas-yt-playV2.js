import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
const handler = async (m, {command, usedPrefix, conn, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}️ *𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗢 𝗧𝗜𝗧𝗨𝗟𝗢*\n *𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n *${usedPrefix + command} Silencer - Pierce Me*\n\n *𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗥 𝗧𝗜𝗧𝗟𝗘*\n *𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n *${usedPrefix + command} Silencer - Pierce Me*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ️*𝗘𝗦𝗣𝗘𝗥𝗘 𝗨𝗡 𝗠𝗢𝗠𝗘𝗡𝗧𝗢 𝗘𝗟 𝗔𝗨𝗗𝗜𝗢*\n *𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n *𝗪𝗔𝗜𝗧 𝗔 𝗠𝗢𝗠𝗘𝗡𝗧 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗔𝗨𝗗𝗜𝗢*\n *𝗣𝗟𝗘𝗔𝗦𝗘*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗚𝗮𝘆𝗕𝗼𝘁 | 𝗘𝗱𝘄𝗶𝗻',
body: 'Super GayBot 👻',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/img.jpg"),
sourceUrl: `https://github.com/EdwinJVG77/GayBot`}}}) 
 try {
const mediaa = await ytPlay(text);
const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if (!aa) {
throw new Error();
}} catch {
const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if (!aa_1) aa_1 = await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mp4'});
}}
if (command == 'play.2') {
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} *𝗘𝗦𝗣𝗘𝗥𝗘 𝗨𝗡 𝗠𝗢𝗠𝗘𝗡𝗧𝗢 𝗘𝗟 𝗩𝗜𝗗𝗘𝗢*\n *𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥*\n\n *𝗪𝗔𝗜𝗧 𝗔 𝗠𝗢𝗠𝗘𝗡𝗧 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗢*\n *𝗣𝗟𝗘𝗔𝗦𝗘*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗚𝗮𝘆𝗕𝗼𝘁 | 𝗘𝗱𝘄𝗶𝗻',
body: 'Super GayBot 👻',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/img.jpg"),
sourceUrl: `https://github.com/EdwinJVG77/GayBot`}}})
try {
const mediaa = await ytPlayVid(text);
const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: ``, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
if (!aa_2) {
throw new Error();
}} catch {
const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);
}}} catch {
m.reply(`${lenguajeGB['smsAvisoFG']()} *𝗜𝗡𝗧𝗘𝗡𝗧𝗘 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢*\n *𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡*`)
handler.limit = 0 //No gastada limite si fallas
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.limit = 1
export default handler

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
