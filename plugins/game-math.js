global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
let mat =`${lenguajeGB['smsAvisoIIG']()}*𝗣𝗨𝗘𝗗𝗘 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥 𝗟𝗔 𝗗𝗜𝗙𝗜𝗖𝗨𝗟𝗧𝗔𝗗*\n*𝗬𝗢𝗨 𝗪𝗥𝗜𝗧𝗘 𝗧𝗛𝗘 𝗗𝗜𝗙𝗙𝗜𝗖𝗨𝗟𝗧𝗬*

*𝗗𝗜𝗙𝗜𝗖𝗨𝗟𝗧𝗔𝗗 | 𝗗𝗜𝗙𝗙𝗜𝗖𝗨𝗟𝗧𝗬* 
${Object.keys(modes).join('  |  ')}

*𝗘𝗝𝗘𝗠𝗣𝗟𝗢 | 𝗘𝗫𝗔𝗠𝗣𝗟𝗘*
${usedPrefix + command} noob
${usedPrefix + command} impossible2

😼 *𝗠𝗜𝗘𝗡𝗧𝗥𝗔𝗦 𝗠𝗔𝗦 𝗗𝗜𝗙𝗨𝗖𝗨𝗟𝗧𝗔𝗗 𝗠𝗔𝗬𝗢𝗥 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔*
😼 *𝗠𝗢𝗥𝗘 𝗗𝗜𝗙𝗙𝗜𝗖𝗨𝗟𝗧𝗬 𝗬𝗢𝗨 𝗖𝗔𝗡 𝗚𝗘𝗧 𝗧𝗛𝗘 𝗚𝗥𝗘𝗔𝗧𝗘𝗥 𝗥𝗘𝗪𝗔𝗥𝗗*
`.trim()
if (args.length < 1) return await conn.reply(m.chat, mat, fkontak, m)

  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return await conn.reply(m.chat, mat, fkontak, m) 

  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*¡𝗛𝗔𝗬 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔𝗦 𝗦𝗜𝗡 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥 𝗘𝗡 𝗘𝗟 𝗖𝗛𝗔𝗧!*\n\n*𝗧𝗛𝗘𝗥𝗘 𝗔𝗥𝗘 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 𝗪𝗜𝗧𝗛𝗢𝗨𝗧𝗔𝗡𝗦𝗪𝗘𝗥𝗜𝗡𝗚 𝗜𝗡 𝗧𝗛𝗘 𝗖𝗛𝗔𝗧!*`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `*𝗖𝗨𝗔𝗟 𝗘𝗦 𝗘𝗟 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 𝗗𝗘 ${math.str} = ?*
*━━━━━━━━━━━━━━━━*
*𝗧𝗜𝗘𝗠𝗣𝗢 | 𝗧𝗜𝗠𝗘*
🧭 *${(math.time / 1000).toFixed(0)} 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*
*━━━━━━━━━━━━━━━━*
*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗬 𝗚𝗔𝗡𝗔*
🏆 *${math.bonus} 𝗫𝗣*
`, m),
math, 4,
  
await conn.reply(m.chat, `*⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗔𝗥𝗥𝗜𝗕𝗔 𝗖𝗢𝗡 𝗟𝗔 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔*\n\n*𝗔𝗡𝗦𝗪𝗘𝗥 𝗧𝗛𝗘 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗔𝗕𝗢𝗩𝗘 𝗧𝗢 𝗞𝗡𝗢𝗪 𝗬𝗢𝗨𝗥 𝗔𝗡𝗦𝗪𝗘𝗥*`, fkontak, m), math, 4,

  
setTimeout(() => { 
if (global.math[id]) conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!*\n*𝗟𝗔 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗘𝗦: ${math.result}*\n\n*𝗧𝗜𝗠𝗘 𝗜𝗦 𝗨𝗣!*\n*𝗧𝗛𝗘 𝗔𝗡𝗦𝗪𝗘𝗥 𝗜𝗦: ${math.result}*`, global.math[id][0])

delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.money = 100
handler.command = /^math|mates|matemáticas/i

export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 30000, 200],
hard: [-100, 100, -70, 70, '*/+-', 40000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 40000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 50000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 60000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
