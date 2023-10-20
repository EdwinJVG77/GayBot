import * as e from "fs";
let handler = async (a, {conn: n, text: t, participants: r, usedPrefix, command}) => {
  if (!t)
    return a.reply(`${lenguajeGB['smsAvisoMG']()}*𝗔𝗚𝗥𝗘𝗚𝗨𝗘 𝗨𝗡𝗔 𝗥𝗔𝗭𝗢𝗡 𝗣𝗔𝗥𝗔 𝗟𝗔 𝗘𝗝𝗘𝗖𝗨𝗖𝗜𝗢𝗡*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Hoy muere un random :v*\n\n*𝗔𝗗𝗗 𝗔 𝗥𝗘𝗔𝗦𝗢𝗡 𝗙𝗢𝗥 𝗘𝗫𝗘𝗖𝗨𝗧𝗜𝗢𝗡*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Hoy muere un random :v*`);
  if (t.length < 5) return a.reply(`${lenguajeGB['smsAvisoMG']()}*𝗟𝗔 𝗥𝗔𝗭𝗢𝗡 𝗘𝗦 𝗠𝗨𝗬 𝗖𝗢𝗥𝗧𝗔*\n*𝗧𝗛𝗘 𝗥𝗘𝗔𝗦𝗢𝗡 𝗜𝗦 𝗩𝗘𝗥𝗬 𝗦𝗛𝗢𝗥𝗧*`);
  let s = await n.profilePictureUrl(a.sender, "image").catch((e) => "./Menu2.jpg");
  var p = [];
  r.map(async (e) => {
    p.push(e.id.replace("c.us", "s.whatsapp.net"));
  });
  let o = 1e4,
    m = p[Math.floor(Math.random() * p.length)];
  if (m.startsWith(n.user.id.split(":")[0])) return a.reply("Hoy no muere nadie :D");
  n.sendMessage(
    a.chat,
    {
      text: `
*╭━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗔𝗗𝗢:*
*┃ @${m.split("@")[0]}*
*┃━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗔𝗭𝗢𝗡 𝗗𝗘 𝗟𝗔*
*┃ 𝗘𝗝𝗘𝗖𝗨𝗖𝗜𝗢𝗡:*
*┃ ${t}*
*╰━━━━━━━━━━━━━━━━*
 _Tiene ${(o % 6e4) / 1e3} segundos para decir sus últimas palabras_`,
      mentions: [m],
    },
    {
      ephemeralExpiration: 86400,
      quoted: {
        key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},
        message: {
          groupInviteMessage: {
            groupJid: "51995386439-1616169743@g.us",
            inviteCode: "m",
            groupName: "P",
            caption: `⚰️@${m.split("@")[0]} 💀`,
            jpegThumbnail: imagen1,
          },
        },
      },
    }
  ),
    setTimeout(() => {
      setTimeout(() => {
        n.groupParticipantsUpdate(a.chat, [m], "remove").catch((e) => {
          a.reply("ERROR");
        });
      }, 1e3),
        n.sendMessage(
          a.chat,
          {text: "Press [F]", mentions: [m]},
          {
            ephemeralExpiration: 86400,
            quoted: {
              key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},
              message: {
                groupInviteMessage: {
                  groupJid: "51995386439-1616169743@g.us",
                  inviteCode: "m",
                  groupName: "P",
                  caption: `C come una manzana* :v🍎`,
                  jpegThumbnail: e.readFileSync("./Menu2.jpg"),
                },
              },
            },
          }
        );
    }, o);
};
(handler.help = ["deathnote"]),
  (handler.tags = ["games"]),
  (handler.command = /^(deathnote)$/i),
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  handler.limit = 20
  handler.rowner = true
  handler.register = true
export default handler;
