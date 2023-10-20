var handler = async (m, { conn, groupMetadata }) => {
  const toM = (a) => "@" + a.split("@")[0];
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  conn.sendMessage(
    m.chat,
    { text: `Pero no tanto como la mamá de ${toM(a)}`, mentions: [a] },
    { quoted: m },
  );
 
};

handler.customPrefix =
  /^facil|es facil|fácil|es fácil|fasil|es fasil|la chupa bien|se le da bien chupar|chupa bn|chupa bien|la chupa bn|la chupas bien|la mamas bien/i;
handler.command = new RegExp();
handler.tags = ["fun"];
handler.exp = 100
export default handler;
