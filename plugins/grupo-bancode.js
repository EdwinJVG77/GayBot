/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 𝗗𝗘 𝗨𝗡 𝗣𝗔𝗜𝗦 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥 𝗡𝗨𝗠𝗘𝗥𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗗𝗘 𝗘𝗦𝗘 𝗣𝗔𝗜𝗦*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 92*`) 
if (isNaN(args[0])) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 𝗗𝗘 𝗨𝗡 𝗣𝗔𝗜𝗦 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥 𝗡𝗨𝗠𝗘𝗥𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗗𝗘 𝗘𝗦𝗘 𝗣𝗔𝗜𝗦*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 92*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${lenguajeGB['smsAvisoAG']()}*𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢 𝗡𝗢 𝗛𝗔𝗬 𝗡𝗜𝗡𝗚𝗨𝗡 𝗡𝗨𝗠𝗘𝗥𝗢 𝗖𝗢𝗡 𝗘𝗟 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 +${lol}*`)
let numeros = ps.map(v=> '➯ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `⚠️ *𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗡𝗨𝗠𝗘𝗥𝗢𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 +${lol} 𝗤𝗨𝗘 𝗘𝗦𝗧𝗔𝗡 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢* ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum","bancode":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}*𝗜𝗡𝗜𝗖𝗜𝗔𝗡𝗗𝗢 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗡𝗨𝗠𝗘𝗥𝗢𝗦 𝗖𝗢𝗡 𝗘𝗟 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 +${lol}, 𝗖𝗔𝗗𝗔 10 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦 𝗦𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥𝗔 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `*@${user.split("@")[0]} 𝗬𝗔 𝗛𝗔 𝗦𝗜𝗗𝗢 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢 :v*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listanum|kicknum|bancode)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
