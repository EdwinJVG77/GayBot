const handler = async (m, {conn, usedPrefix, command, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  const user = global.db.data.users[who];
  if (!who) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔 𝗟𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔 𝗤𝗨𝗘 𝗧𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗙𝗢𝗟𝗟𝗔𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} @tag*\n\n*𝗧𝗔𝗚 𝗧𝗛𝗘 𝗣𝗘𝗥𝗦𝗢𝗡 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗧𝗢 𝗙𝗨𝗖𝗞*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} @tag*`);


  const follar = await conn.reply(m.chat, `*🥵 @${m.sender.split('@')[0]} 𝗧𝗘 𝗙𝗢𝗟𝗟𝗔𝗦𝗧𝗘 𝗔 ${text} 🥵*\n\n*𝗧𝗲 𝗮𝗰𝗮𝗯𝗮𝘀 𝗱𝗲 𝗳𝗼𝗹𝗹𝗮𝗿 𝗮 𝗹𝗮 𝗽𝗲𝗿𝗿𝗮 𝗱𝗲 ${text}*\n*𝗮 𝗰𝘂𝗮𝘁𝗿𝗼 𝗽𝗮𝘁𝗮𝘀 𝗺𝗶𝗲𝗻𝘁𝗿𝗮𝘀 𝘁𝗲 𝗴𝗲𝗺𝗶𝗮 𝗰𝗼𝗺𝗼 𝘂𝗻𝗮 𝗺𝗮𝗹𝗱𝗶𝘁𝗮 𝗽𝗲𝗿𝗿𝗮 𝗹𝗮 𝗵𝗮𝘀 𝗱𝗲𝗷𝗮𝗱𝗼 𝘁𝗮𝗻 𝗿𝗲𝘃𝗲𝗻𝘁𝗮𝗱𝗮 𝗾𝘂𝗲 𝗻𝗼 𝗽𝘂𝗲𝗱𝗲 𝘀𝗼𝘀𝘁𝗲𝗻𝗲𝗿 𝗻𝗶 𝘀𝘂 𝗽𝗿𝗼𝗽𝗶𝗼 𝗰𝘂𝗲𝗿𝗽𝗼 𝗹𝗮 𝗺𝗮𝗹𝗱𝗶𝘁𝗮 𝘇𝗼𝗿𝗿𝗮* 🦊

*${text} ¡𝗬𝗔 𝗧𝗘 𝗛𝗔𝗡 𝗙𝗢𝗟𝗟𝗔𝗗𝗢! 🥵*`, m, {mentions: [who, m.sender]});

  conn.sendMessage(m.chat, {react: {text: '🍆', key: follar.key}});
};
handler.help = ['follar @user'];
handler.tags = ['fun'];
handler.command = ['follar', 'coger', 'cojer', 'violar', 'metermonda'];
handler.group = true;
export default handler;
