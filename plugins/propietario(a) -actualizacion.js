import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'EdwinJVG77';
const repo = 'GayBot';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoEG']()}*¡𝗘𝗟 𝗥𝗘𝗣𝗢𝗦𝗢𝗧𝗢𝗥𝗜𝗢 𝗛𝗔 𝗦𝗜𝗗𝗢 𝗔𝗖𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗗𝗢!*\n*𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢: ${html_url}*\n*𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗖𝗢𝗠𝗠𝗜𝗧: ${message}*` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗘𝗥𝗥𝗢𝗥 𝗔𝗟 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗥 𝗘𝗟 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢:'`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|actualizacion)/i
handler.rowner = true
export default handler
