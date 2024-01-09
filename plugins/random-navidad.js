import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/EdwinJVG77/GayBot/master/src/JSON/navidad.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, url, 'error.jpg', `🎅🏻`, m);
};
handler.help = ['navidad'];
handler.tags = ['internet'];
handler.command = /^(navidad)$/i;
handler.limit = false
export default handler;
