import similarity from 'similarity'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('*¡𝗬𝗔 𝗛𝗔𝗡 𝗖𝗢𝗡𝗧𝗘𝗦𝗧𝗔𝗗𝗢 𝗘𝗦𝗘 𝗔𝗖𝗘𝗥𝗧𝗜𝗝𝗢!*')
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`✅ *¡𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔!* ✅\n*+${this.tekateki[id][2]} 𝗘𝗫𝗣*`)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`*¡𝗖𝗔𝗦𝗜 𝗟𝗢 𝗟𝗢𝗚𝗥𝗔𝗦!*`)
        else m.reply('❌ *¡𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔!* ❌')
    }
    return !0
}

handler.exp = 0

export default handler
