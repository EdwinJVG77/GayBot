
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗦𝗨 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗦𝗘𝗥𝗜𝗘, 𝗦𝗜 𝗡𝗢 𝗦𝗔𝗕𝗘 𝗖𝗨𝗔𝗟 𝗘𝗦 𝗨𝗦𝗘 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #myns*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗦𝗘𝗥𝗜𝗔𝗟 𝗡𝗨𝗠𝗕𝗘𝗥, 𝗜𝗙 𝗬𝗢𝗨 𝗗𝗢𝗡'𝗧 𝗞𝗡𝗢𝗪 𝗪𝗛𝗜𝗖𝗛 𝗜𝗧 𝗜𝗦, 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 #myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw `${lenguajeGB['smsAvisoFG']()}*𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗤𝗨𝗘 𝗦𝗘𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗢, 𝗨𝗦𝗘 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #myns 𝗣𝗔𝗥𝗔 𝗢𝗕𝗧𝗘𝗡𝗘𝗥 𝗦𝗨 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗦𝗘𝗥𝗜𝗘*\n\n*𝗩𝗘𝗥𝗜𝗙𝗬 𝗜𝗧 𝗜𝗦 𝗖𝗢𝗥𝗥𝗘𝗖𝗧, 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 #myns 𝗧𝗢 𝗚𝗘𝗧 𝗬𝗢𝗨𝗥 𝗦𝗘𝗥𝗜𝗔𝗟 𝗡𝗨𝗠𝗕𝗘𝗥*`

global.db.data.users[m.sender]['registroC'] = false
global.db.data.users[m.sender]['registroR'] = false
user.name = 0
user.age = 0
user.genero = 0
user.identidad = 0
user.pasatiempo = 0
user.premLimit = 1
user.tiempo = 0
user.descripcion = 0
user.registered = false
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗨𝗦𝗧𝗘𝗗 𝗬𝗔 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 😪*\n\n*𝗬𝗢𝗨 𝗔𝗥𝗘 𝗡𝗢 𝗟𝗢𝗡𝗚𝗘𝗥 𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥𝗘𝗗 😪*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
