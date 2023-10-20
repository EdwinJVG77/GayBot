import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢 𝗣𝗔𝗥𝗔 𝗖𝗥𝗘𝗔𝗥 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡 𝗖𝗢𝗡 𝗗𝗔𝗟𝗟-𝗘*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢𝗦:*\n*${usedPrefix + command} gato*\n*${usedPrefix + command} perro*`;
    await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}*𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗡𝗗𝗢 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗔𝗚𝗨𝗔𝗥𝗗𝗘 𝗨𝗡 𝗠𝗢𝗠𝗘𝗡𝗧𝗢*`}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log(`${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥 𝗘𝗡 𝗟𝗔 𝗔𝗣𝗜 𝗡𝗨𝗠𝗘𝗥𝗢 1 𝗗𝗘 𝗗𝗔𝗟𝗟-𝗘*`);  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log(`${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥 𝗘𝗡 𝗟𝗔 𝗔𝗣𝗜 𝗡𝗨𝗠𝗘𝗥𝗢 2 𝗗𝗘 𝗗𝗔𝗟𝗟-𝗘*`);
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log(`${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥 𝗘𝗡 𝗟𝗔 𝗔𝗣𝗜 𝗡𝗨𝗠𝗘𝗥𝗢 3 𝗗𝗘 𝗗𝗔𝗟𝗟-𝗘*`);
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log(`${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥, 𝗡𝗜𝗡𝗚𝗨𝗡𝗔 𝗔𝗣𝗜 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗔`);
    throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗢𝗕𝗧𝗨𝗩𝗜𝗘𝗥𝗢𝗡 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'cimg', 'a-img', 'aimg', 'imagine'];
export default handler;
