import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗣𝗔𝗥𝗔 𝗔𝗖𝗢𝗥𝗧𝗔𝗥*\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗦𝗛𝗢𝗥𝗧𝗘𝗡*`;
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `${lenguajeGB['smsAvisoMG']()}*𝗖𝗢𝗠𝗣𝗥𝗨𝗘𝗕𝗘 𝗤𝗨𝗘 𝗘𝗟 𝗧𝗘𝗫𝗧𝗢 𝗜𝗡𝗚𝗥𝗘𝗦𝗔𝗗𝗢 𝗦𝗘𝗔 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘*`;
  const done = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ¡𝗦𝗘 𝗥𝗘𝗔𝗟𝗜𝗭𝗢 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢!*
*┃ 𝗜𝗧 𝗪𝗔𝗦 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟!*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 𝗔𝗡𝗧𝗘𝗦:*
*┃ 𝗕𝗘𝗙𝗢𝗥𝗘 𝗟𝗜𝗡𝗞:*
*┃ ${text}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 𝗔𝗛𝗢𝗥𝗔:*
*┃ 𝗟𝗜𝗡𝗞 𝗡𝗢𝗪:*
*┃ ${shortUrl1}*
*╰━━━━━━━━━━━━━━━━━━━━*`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|short|acortar|corto)$/i;
handler.fail = null;
export default handler;
