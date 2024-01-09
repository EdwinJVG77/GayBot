
import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendFile(m.chat, url, 'error.jpg', `😹 _${command}_ 😹`, m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes|momo|momos)$/i
handler.limit = false
export default handler
