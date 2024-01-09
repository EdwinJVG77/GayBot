/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoAG']()}*𝗨𝗧𝗜𝗟𝗜𝗭𝗘 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗗𝗜𝗥𝗘𝗖𝗧𝗔𝗠𝗘𝗡𝗧𝗘 𝗘𝗡 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧*` },
      { quoted: m }
    );
  }
 
  const sessionPath = './GayBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}*𝗟𝗔 𝗖𝗔𝗥𝗣𝗘𝗧𝗔 (GayBotSession) 𝗡𝗢 𝗘𝗫𝗜𝗦𝗧𝗘 𝗢 𝗘𝗦𝗧𝗔 𝗩𝗔𝗖𝗜𝗢.*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗡𝗜𝗡𝗚𝗨𝗡 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 𝗣𝗔𝗥𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗘𝗡 𝗟𝗔 𝗖𝗔𝗥𝗣𝗘𝗧𝗔 (GayBotSession)*` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoAG']()}*𝗜𝗡𝗜𝗖𝗜𝗔𝗡𝗗𝗢 𝗣𝗥𝗢𝗖𝗘𝗦𝗢 𝗗𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗖𝗜𝗢𝗡 𝗗𝗘: ${filesDeleted} 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 𝗗𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡, 𝗘𝗫𝗖𝗘𝗣𝗧𝗢 𝗘𝗟 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 (creds.json)*` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('𝗘𝗥𝗥𝗢𝗥 𝗔𝗟 𝗟𝗘𝗘𝗥 𝗟𝗔 𝗖𝗔𝗥𝗣𝗘𝗧𝗔 𝗢 𝗟𝗢𝗦 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦 𝗗𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡:', err);
    await conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoFG']()}*𝗢𝗖𝗨𝗥𝗥𝗜𝗢 𝗨𝗡 𝗘𝗥𝗥𝗢𝗥 𝗔𝗟 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗟𝗢𝗦 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦 𝗗𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡*` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}*𝗛𝗢𝗟𝗔, 𝗬𝗔 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗔*\n*𝗦𝗜 𝗘𝗟 𝗕𝗢𝗧 𝗡𝗢 𝗟𝗘 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗦𝗨𝗦 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗛𝗔𝗚𝗔 𝗨𝗡 𝗣𝗘𝗤𝗨𝗘Ñ𝗢 𝗦𝗣𝗔𝗠*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|clearallsession|deletegay)$/i;
handler.rowner = true
export default handler;
