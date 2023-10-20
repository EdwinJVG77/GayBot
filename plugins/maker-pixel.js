const handler = async (m, {conn, usedprefix, text}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/pixelate', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '*¡𝗜𝗠𝗔𝗚𝗘𝗡 𝗣𝗜𝗫𝗘𝗟𝗘𝗔𝗗𝗔 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢! ✅*', m);
};
handler.help = ['pixel', 'difuminar'];
handler.tags = ['maker'];
handler.command = /^(pixel|pixelar|difuminar)$/i;
handler.limit = 1
export default handler;
