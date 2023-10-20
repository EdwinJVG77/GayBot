import axios from "axios";

var  handler = async (m, { usedPrefix, conn }) => {
  const foxgirl_irius = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);

  const buttonMessage = {
    image: { url: foxgirl_irius.data.url },
    caption: `*乂 ⺀ ANIME - FOXGIRL ⺀ 乂*`,
    footer: `*𝗚𝗮𝘆𝗕𝗼𝘁🤖*`,
    buttons: null,
    headerType: 4,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = /^(foxgirl|girlfox)$/i;
handler.limit = false

export default handler;
