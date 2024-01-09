import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗡 𝗔𝗡𝗜𝗠𝗘 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗙 𝗔𝗡 𝗔𝗡𝗜𝗠𝗘 𝗧𝗢 𝗦𝗘𝗔𝗥𝗖𝗛*`);
  try { 
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗧𝗨𝗟𝗢 | 𝗧𝗜𝗧𝗟𝗘:*
*┃ ${result.title}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗙𝗢𝗥𝗠𝗔𝗧𝗢 | 𝗙𝗢𝗥𝗠𝗔𝗧:* 
*┃ ${result.type}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗦𝗧𝗔𝗗𝗢 | 𝗦𝗧𝗔𝗧𝗨𝗦:* 
*┃ ${result.status.toUpperCase().replace(/\_/g, ' ')}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗣𝗜𝗦𝗢𝗗𝗜𝗢𝗦 | 𝗘𝗣𝗜𝗦𝗢𝗗𝗘𝗦:* 
*┃ ${result.episodes}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 | 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:*
*┃ ${result.duration}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗕𝗔𝗦𝗔𝗗𝗢 𝗘𝗡 | 𝗕𝗔𝗦𝗘𝗗 𝗜𝗡:* 
*┃ ${result.source.toUpperCase()}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗦𝗧𝗥𝗘𝗡𝗔𝗗𝗢 | 𝗣𝗥𝗘𝗠𝗜𝗘𝗥𝗘𝗗:*
*┃ ${result.aired.from}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗔𝗗𝗢 | 𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗘𝗗:* 
*┃ ${result.aired.to}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗜𝗗𝗔𝗗 | 𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗜𝗧𝗬:* 
*┃ ${result.popularity}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗙𝗔𝗩𝗢𝗥𝗜𝗧𝗢𝗦 | 𝗙𝗔𝗩𝗢𝗥𝗜𝗧𝗘𝗦:* 
*┃ ${result.favorites}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡 | 𝗥𝗔𝗧𝗜𝗡𝗚:* 
*┃ ${result.rating}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗔𝗡𝗚𝗢 | 𝗥𝗔𝗡𝗞:* 
*┃ ${result.rank}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗥𝗔𝗜𝗟𝗘𝗥 | 𝗧𝗥𝗔𝗜𝗟𝗘𝗥:* 
*┃ ${result.trailer.url}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:* 
*┃ ${result.url}*
*╰━━━━━━━━━━━━━━━━━━━━*

_*Background:*_ _+${resultes.text}_

_*Sinopsis:*_ _${resultes2.text}_`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `${lenguajeGB['smsAvisoFG']()}*𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗟𝗢 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢*`;
  }
};
handler.command = /^(animeinfo|infoanime)$/i;
handler.limit = 1
export default handler;
