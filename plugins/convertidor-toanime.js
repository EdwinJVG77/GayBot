import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) throw `${lenguajeGB.smsAvisoMG()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*`
  m.reply(`${lenguajeGB.smsAvisoEG()}*𝗘𝗦𝗧𝗢𝗬 𝗩𝗢𝗡𝗩𝗜𝗥𝗧𝗜𝗘𝗡𝗗𝗢 𝗟𝗔 𝗜𝗠𝗔𝗚𝗘𝗡 𝗔 𝗗𝗜𝗦𝗘Ñ𝗢 𝗔𝗡𝗜𝗠𝗘, 𝗦𝗘𝗔 𝗣𝗔𝗖𝗜𝗘𝗡𝗧𝗘 𝗘𝗡 𝗟𝗢 𝗤𝗨𝗘 𝗘𝗡𝗩𝗜𝗢 𝗘𝗟 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢*`);
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `${lenguajeGB.smsAvisoFG()}*𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗤𝗨𝗘 𝗘𝗡 𝗟𝗔 𝗜𝗠𝗔𝗚𝗘𝗡 𝗦𝗘 𝗩𝗘𝗔 𝗘𝗟 𝗥𝗢𝗦𝗧𝗥𝗢 𝗗𝗘 𝗟𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔*\n\n*𝗩𝗘𝗥𝗜𝗙𝗬 𝗧𝗛𝗔𝗧 𝗧𝗛𝗘 𝗣𝗘𝗥𝗦𝗢𝗡 𝗙𝗔𝗖𝗘 𝗜𝗦 𝗩𝗜𝗦𝗜𝗕𝗟𝗘 𝗜𝗡 𝗧𝗛𝗘 𝗜𝗠𝗔𝗚𝗘*`
}}}}
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
