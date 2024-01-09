let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `*𝗚𝗔𝗬𝗕𝗢𝗧 𝗔𝗕𝗔𝗡𝗗𝗢𝗡𝗔 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢, 𝗙𝗨𝗘 𝗚𝗘𝗡𝗜𝗔𝗟 𝗘𝗦𝗧𝗔𝗥 𝗔𝗤𝗨𝗜 👋*`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
