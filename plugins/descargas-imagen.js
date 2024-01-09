import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗨𝗦𝗘 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗠𝗔𝗡𝗘𝗥𝗔:*\n*${usedPrefix + command} Perro*\n\n*𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗞𝗘 𝗧𝗛𝗜𝗦:*\n*${usedPrefix + command} Dog*`
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('⚠️😾')      
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*╭━━━━━━━━━━━━━━━━━━━━*\n*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 𝗗𝗘 | 𝗥𝗘𝗦𝗨𝗟𝗧 𝗢𝗙:*\n*┃ ${text}* 💕\n*╰━━━━━━━━━━━━━━━━━━━━*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(image|imagen)$/i
handler.exp = 20
handler.limit = 1
export default handler
