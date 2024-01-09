const items = [
    'limit', 'exp', 'joincount', 'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('estas haciendo una transferencia')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    
    let lol = `💱 *𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔* 💱
    
*${usedPrefix + command} <tipo> <cantidad> <@tag>*

*Ejemplo:*

*${usedPrefix + command} exp 30 @57300000000*

*╭━━━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘𝗦* 🎒
*┃━━━━━━━━━━━━━━━━━━*
*┃ limit = 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀* 💎
*┃ money = 𝗚𝗮𝘆𝗖𝗼𝗶𝗻𝘀* 🏳️‍🌈
*┃ exp = 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮* ⚡
*╰━━━━━━━━━━━━━━━━━━* 
`.trim()
    
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢*`)
    if (!(who in global.db.data.users)) return m.reply(`${fg}*𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 ${who} 𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗨𝗘𝗡𝗧𝗥𝗔 𝗘𝗡 𝗠𝗜 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦*`)
    if (user[type] * 1 < count) return m.reply(`${fg}*𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘 𝗣𝗔𝗥𝗔 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗟𝗔 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔 𝗗𝗘 ${type}*`)
    let mentionedJid = [who]
    let username = conn.getName(who)
    
    let confirm = `
*𝗘𝗦𝗧𝗔𝗦 𝗔 𝗣𝗨𝗡𝗧𝗢 𝗗𝗘 𝗛𝗔𝗖𝗘𝗥 𝗨𝗡𝗔 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔* 

💹 *${count} ${type} para* *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*

*¿𝗗𝗘𝗦𝗘𝗔𝗦 𝗖𝗢𝗡𝗧𝗜𝗡𝗨𝗔𝗥?*
*¡𝗧𝗜𝗘𝗡𝗘𝗦 60 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦!*

*Escriba: (si) para aceptar*
*Escriba: (no) para cancelar*`.trim()
    
    let c = `Tienes 60 segundos!!`
    await conn.reply(m.chat, confirm, m, { mentions: [who] })
  //  conn.sendButton(m.chat, confirm, c, null, [['𝙎𝙄'], ['𝙉𝙊']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢 𝗦𝗘 𝗛𝗔 𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗗𝗢*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/^No|no$/i.test(m.text) ) { 
  //  if (/No?/m.text(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('*𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗗𝗢*')
    }
    if (/^Si|si$/i.test(m.text) ) { 
  //  if (/Si?/m.text(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ *𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔 𝗛𝗘𝗖𝗛𝗔 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢:*\n\n*${count} ${type} para* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*Error al transferir ${count} ${type} para* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp', 'dar', 'enviar', 'transferir'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
