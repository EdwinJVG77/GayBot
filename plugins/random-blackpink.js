import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command }) => {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/blackpink.txt').then(res => res.text()).then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, 'error.jpg', `*乂 ⺀ K-POP - BLACKPINK ⺀ 乂*`, m)
})}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^(blackpink)$/i
handler.limit = false
export default handler
