import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
import MessageType from '@whiskeysockets/baileys';
const effects = ['jail', 'gay', 'glass', 'wasted', 'triggered', 'lolice', 'simpcard', 'horny'];

const handler = async (m, {conn, usedPrefix, text}) => {
  const effect = text.trim().toLowerCase();
  if (!effects.includes(effect)) {
    throw `
${lenguajeGB['smsAvisoMG']()}*𝗗𝗘𝗕𝗘 𝗨𝗦𝗔𝗥 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗙𝗢𝗥𝗠𝗔*
*𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗦 𝗙𝗢𝗟𝗟𝗢𝗪𝗦*
*${usedPrefix}cs (efecto)*\n
*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*
*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*\n
*𝗘𝗝𝗘𝗠𝗣𝗟𝗢 | 𝗘𝗫𝗔𝗠𝗣𝗟𝗘*
*${usedPrefix}cs gay*\n
*𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 | 𝗟𝗜𝗦𝗧 𝗘𝗙𝗙𝗘𝗖𝗧:*\n
${effects.map((effect) => `*_> ${effect}_*`).join('\n')}
`.trim();
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗟𝗔 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗥𝗘𝗖𝗨𝗘𝗥𝗗𝗘 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n\n*𝗡𝗢 𝗜𝗠𝗔𝗚𝗘 𝗙𝗢𝗨𝗡𝗗, 𝗥𝗘𝗠𝗘𝗠𝗕𝗘𝗥 𝗧𝗢 𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*';
  if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag}*𝗘𝗟 𝗙𝗢𝗥𝗠𝗔𝗧𝗢 𝗗𝗘𝗕𝗘 𝗦𝗘𝗥 jpg o jpeg 𝗬 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥 𝗔 𝗟𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n\n*𝗧𝗛𝗘 𝗙𝗢𝗥𝗠𝗔𝗧 𝗠𝗨𝗦𝗧 𝗕𝗘 jpg or jpeg 𝗔𝗡𝗗 𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗘 𝗜𝗠𝗔𝗚𝗘*`;
  const img = await q.download();
  const url = await uploadImage(img);
  const apiUrl = global.API('https://some-random-api.com/canvas/', encodeURIComponent(effect), {
    avatar: url,
  });
  try {
    const stiker = await sticker(null, apiUrl, global.packname, global.author);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  } catch (e) {
    m.reply('*𝗡𝗢 𝗦𝗘 𝗣𝗨𝗗𝗢 𝗛𝗔𝗖𝗘𝗥 𝗟𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥, 𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗜𝗠𝗔𝗚𝗘𝗡 𝗘𝗡 𝗦𝗨 𝗟𝗨𝗚𝗔𝗥\n\n𝗧𝗛𝗘 𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗖𝗢𝗨𝗟𝗗 𝗡𝗢𝗧 𝗕𝗘 𝗗𝗢𝗡𝗘 𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥, 𝗦𝗘𝗡𝗗 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘 𝗜𝗡𝗦𝗧𝗘𝗔𝗗*');
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m);
  }
};
handler.help = ['stickmaker (caption|reply media)'];
handler.tags = ['General'];
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i;
export default handler;
