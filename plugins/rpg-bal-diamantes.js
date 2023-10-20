let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
*╭「 💎 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 💎 」*
*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) | 𝗨𝗦𝗘𝗥*
*┃ ${name}*
*┃━━━━━━━━━━━━━━━*
*┃ ${global.db.data.users[who].limit} 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘(𝗦)* 💎
*╰━━━━━━[ ${vs} ]━━━━━━*\n\n*𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 𝗖𝗢𝗡 𝗘𝗫𝗣*
*${usedPrefix}buy <cantidad>*
*${usedPrefix}buyall <cantidad>*

*𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 𝗖𝗢𝗡 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦*
*${usedPrefix}bus <cantidad>*
*${usedPrefix}busyall <cantidad>*`)

}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
