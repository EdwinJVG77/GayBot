import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`;

  if (command == 'boobs') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/boobs.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pussy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/pussy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/panties.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'culo') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/booty.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfemdom') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwfemdom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwglass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'hentai') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwhentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfworgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfurry') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwfurry.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwtrapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwyaoi') {
    const res = await fetch(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwyaoi.json`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwyaoi2') {
    const res = await fetch(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwyaoi.json`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwyuri') {
    const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwyuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwyuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/nsfwyuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'nsfwyuri', 'nsfwyuri2', 'nsfwyaoi', 'nsfwyaoi2', 'nsfwecchi', 'nsfwfurry', 'hentai', 'nsfwtrapito'];
handler.command = ['boobs', 'tetas', 'booty', 'culo', 'pussy', 'panties', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'nsfwyuri', 'nsfwyuri2', 'nsfwyaoi', 'nsfwyaoi2', 'nsfwecchi', 'nsfwfurry', 'hentai', 'nsfwtrapito'];
handler.tags = ['nsfw'];
export default handler;
