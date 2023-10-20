let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('😨 *¡𝗡𝗢 𝗛𝗔𝗚𝗔𝗦 𝗧𝗥𝗔𝗠𝗣𝗔!*\n*𝗗𝗢 𝗡𝗢𝗧 𝗖𝗛𝗘𝗔𝗧!*')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`_*${format} = ${result}*_`)
} catch (e) {
if (e == undefined) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡𝗔 𝗢𝗣𝗘𝗥𝗔𝗖𝗜𝗢𝗡 𝗠𝗔𝗧𝗘𝗠𝗔𝗧𝗜𝗖𝗔 𝗣𝗔𝗥𝗔 𝗖𝗔𝗟𝗖𝗨𝗟𝗔𝗥 𝗘𝗟 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗠𝗔𝗧𝗘𝗠𝗔𝗧𝗜𝗖𝗔𝗟 𝗢𝗣𝗘𝗥𝗔𝗧𝗜𝗢𝗡 𝗧𝗢 𝗖𝗔𝗟𝗖𝗨𝗟𝗔𝗧𝗘 𝗧𝗛𝗘 𝗥𝗘𝗦𝗨𝗟𝗧*`
throw `${lenguajeGB['smsAvisoFG']()}*𝗦𝗢𝗟𝗢 𝗦𝗘 𝗔𝗗𝗠𝗜𝗧𝗘𝗡 𝗡𝗨𝗠𝗘𝗥𝗢𝗦 𝗬 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦*\n*𝗢𝗡𝗟𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 𝗔𝗡𝗗 𝗦𝗬𝗠𝗕𝗢𝗟𝗦 𝗔𝗥𝗘 𝗔𝗟𝗟𝗢𝗪𝗘𝗗 -, +, * , /, ×, ÷, π, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
