import jimp from 'jimp';

const handler = async (m, {conn, text}) => {
  const img = await jimp.read('https://i.imgur.com/nav6WWX.png');
  const who = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const avatar = await jimp.read(await conn.profilePictureUrl(who, 'image'));
  const bonk = await img.composite(avatar.resize(128, 128), 120, 90, {
    mode: 'dstOver',
    opacitySource: 1,
    opacityDest: 1,
  }).getBufferAsync('image/png');
  conn.sendMessage(m.chat, {image: bonk}, {quoted: m});
};
handler.command = /^(bonk)$/i;
handler.limit = false

export default handler;
