import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/itzy.json`)).data;
  const mystic = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, mystic, 'error.jpg', `*乂 ⺀ K-POP - ITZY ⺀ 乂*`, m);
};
handler.help = ['itzy', 'kpopitzy'];
handler.tags = ['internet'];
handler.command = /^(kpopitzy|itzy)$/i;
handler.limit = false
export default handler;
