import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗚𝗜𝗧𝗛𝗨𝗕*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://github.com/EdwinJVG77/GayBot*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘*\n*${usedPrefix + command} https://github.com/EdwinJVG77/GayBot*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}*𝗘𝗡𝗟𝗔𝗖𝗘 𝗡𝗢 𝗩𝗔𝗟𝗜𝗗𝗢. 𝗗𝗘𝗕𝗘 𝗦𝗘𝗥 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗚𝗜𝗧𝗛𝗨𝗕*\n\n*𝗜𝗡𝗩𝗔𝗟𝗜𝗗 𝗟𝗜𝗡𝗞. 𝗠𝗨𝗦𝗧 𝗕𝗘 𝗔 𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞*`
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗔𝗥𝗖𝗛𝗜𝗩𝗢, 𝗨𝗡 𝗠𝗢𝗠𝗘𝗡𝗧𝗢 🚀*\n*𝗦𝗜 𝗡𝗢 𝗟𝗘 𝗟𝗟𝗘𝗚𝗔 𝗘𝗟 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 𝗘𝗦 𝗗𝗘𝗕𝗜𝗗𝗢 𝗔 𝗤𝗨𝗘 𝗘𝗟 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢 𝗘𝗦 𝗣𝗘𝗦𝗔𝗗𝗢.*\n\n*𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗙𝗜𝗟𝗘, 𝗝𝗨𝗦𝗧 𝗔 𝗠𝗢𝗠𝗘𝗡𝗧 🚀*\n*𝗜𝗙 𝗧𝗛𝗘 𝗙𝗜𝗟𝗘 𝗗𝗢𝗘𝗦 𝗡𝗢𝗧 𝗔𝗥𝗥𝗜𝗩𝗘, 𝗜𝗧 𝗜𝗦 𝗕𝗘𝗖𝗔𝗨𝗦𝗘 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗬 𝗜𝗦 𝗛𝗘𝗔𝗩𝗬.*`)
conn.sendFile(m.chat, url, filename, null, m)

} catch { 
handler.limit = 0 //❌ No gasta diamantes si el comando falla
}}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = false
export default handler
