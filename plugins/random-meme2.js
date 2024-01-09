import hispamemes from 'hispamemes'
let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
conn.sendFile(m.chat, meme, 'error.jpg', `😹 _${command}_ 😹`, m)
}
handler.command = ['meme2', 'memes2', 'momo2', 'momos2'] 
handler.limit = false
export default handler
