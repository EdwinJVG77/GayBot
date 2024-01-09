const xpperlimit = 100
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^bus/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `*╭「 𝗦𝗛𝗢𝗣 | 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 」*
*┃ 𝗡𝗢𝗧𝗔 𝗗𝗘 𝗣𝗔𝗚𝗢* 🛒
*┃━━━━━━━━━━━━*
*┃ 𝗖𝗢𝗠𝗣𝗥𝗔𝗦𝗧𝗘: +${count} 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘(𝗦) 💎* 
*┃ 𝗚𝗔𝗦𝗧𝗔𝗦𝗧𝗘: -${xpperlimit * count} 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 🏳️‍🌈*
*╰━━━━━━━━━━━━*`, m)
  } else conn.reply(m.chat, `❎ *𝗟𝗢 𝗦𝗜𝗘𝗡𝗧𝗢, 𝗡𝗢 𝗧𝗜𝗘𝗡𝗘𝗦 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘 𝗚𝗔𝗬𝗖𝗢𝗜𝗡𝗦 𝗣𝗔𝗥𝗔 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 ${count} 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘(𝗦)* 💎`, m)
}
handler.help = ['Bus', 'Busyall']
handler.tags = ['money']
handler.command = ['bus', 'busyall'] 
handler.register = true
handler.disabled = false

export default handler
