const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*🚔🚨 𝗟𝗢𝗟𝗜𝗖𝗢𝗡𝗦 𝗖𝗢𝗠𝗢 𝗧𝗨 𝗦𝗢𝗟𝗢 𝗣𝗘𝗥𝗧𝗘𝗡𝗘𝗖𝗘𝗡 𝗔 𝗟𝗔 𝗖𝗔𝗥𝗖𝗘𝗟 🚨🚔*', m);
};
handler.help = ['lolice'];
handler.tags = ['maker'];
handler.command = /^(lolice)$/i;
handler.limit = 1
export default handler;
