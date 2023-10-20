import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*¡𝗧𝗢𝗗𝗔𝗩𝗜𝗔 𝗛𝗔𝗬 𝗔𝗖𝗘𝗥𝗧𝗜𝗝𝗢𝗦 𝗦𝗜𝗡 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥 𝗘𝗡 𝗘𝗟 𝗖𝗛𝗔𝗧!*', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.question}*

*𝗧𝗜𝗘𝗠𝗣𝗢: ${(timeout / 1000).toFixed(2)} 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*
*𝗕𝗢𝗡𝗢: +${poin} 𝗘𝗫𝗣*
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `*¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!*\n*𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔:* ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i
handler.register = true

export default handler
