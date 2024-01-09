//Créditos a Katashi Fukushima

import fs from 'fs'

let timeout = 30000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*𝗧𝗢𝗗𝗔𝗩𝗜𝗔 𝗛𝗔𝗬 𝗨𝗡𝗔 𝗣𝗔𝗟𝗔𝗕𝗥𝗔 𝗦𝗜𝗡 𝗢𝗥𝗗𝗘𝗡𝗔𝗥 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗖𝗛𝗔𝗧', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/palabra.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.question}*

*𝗧𝗜𝗘𝗠𝗣𝗢: ${(timeout / 1000).toFixed(2)} 𝗦𝗘𝗚*
*𝗕𝗢𝗡𝗢: +${poin} 𝗘𝗫𝗣*
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!\n*𝗣𝗔𝗟𝗔𝗕𝗥𝗔:* ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['palabra']
handler.tags = ['game']
handler.command = /^(palabra|word|ordenar|order)$/i

export default handler
